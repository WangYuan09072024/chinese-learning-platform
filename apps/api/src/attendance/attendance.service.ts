import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SaveAttendanceDto } from './dto/save-attendance.dto';
import { Role } from '@prisma/client';

const STAFF_ROLES: Role[] = [Role.ADMIN, Role.SUPER_ADMIN, Role.CONTENT_MANAGER];

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  private async assertCanManageSession(sessionId: string, requesterId: string, requesterRoles: string[]) {
    const session = await this.prisma.classSession.findUnique({
      where: { id: sessionId },
      include: { course: { select: { id: true, title: true } } },
    });
    if (!session) throw new NotFoundException('Session not found');

    const isStaff = requesterRoles.some((r) => STAFF_ROLES.includes(r as Role));
    if (!isStaff) {
      const assignment = await this.prisma.courseAssignment.findUnique({
        where: { courseId_teacherId: { courseId: session.courseId, teacherId: requesterId } },
      });
      if (!assignment) throw new ForbiddenException('Chỉ giáo viên phụ trách hoặc quản trị mới điểm danh được');
    }
    return session;
  }

  // The enrolled roster for a session's course, merged with any existing marks.
  async getRoster(sessionId: string, requesterId: string, requesterRoles: string[]) {
    const session = await this.assertCanManageSession(sessionId, requesterId, requesterRoles);

    const [enrollments, records] = await Promise.all([
      this.prisma.enrollment.findMany({
        where: { courseId: session.courseId },
        include: { student: { select: { id: true, name: true, email: true } } },
        orderBy: { student: { name: 'asc' } },
      }),
      this.prisma.attendanceRecord.findMany({ where: { sessionId } }),
    ]);
    const byStudent = new Map(records.map((r) => [r.studentId, r]));

    return {
      session: {
        id: session.id,
        title: session.title,
        startTime: session.startTime,
        courseTitle: session.course.title,
      },
      roster: enrollments.map((e) => ({
        studentId: e.student.id,
        name: e.student.name,
        email: e.student.email,
        status: byStudent.get(e.student.id)?.status ?? null,
        note: byStudent.get(e.student.id)?.note ?? null,
      })),
    };
  }

  async save(sessionId: string, requesterId: string, requesterRoles: string[], dto: SaveAttendanceDto) {
    await this.assertCanManageSession(sessionId, requesterId, requesterRoles);

    await this.prisma.$transaction(
      dto.records.map((r) =>
        this.prisma.attendanceRecord.upsert({
          where: { sessionId_studentId: { sessionId, studentId: r.studentId } },
          update: { status: r.status, note: r.note },
          create: { sessionId, studentId: r.studentId, status: r.status, note: r.note },
        }),
      ),
    );

    return { saved: dto.records.length };
  }
}
