import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { Role, NotificationType } from '@prisma/client';
import { NotificationsService } from '../notifications/notifications.service';

const STAFF_ROLES: Role[] = [Role.ADMIN, Role.SUPER_ADMIN, Role.CONTENT_MANAGER];

@Injectable()
export class SessionsService {
  constructor(
    private prisma: PrismaService,
    private notifications: NotificationsService,
  ) {}

  private async assertCanManage(courseId: string, requesterId: string, requesterRoles: string[]) {
    const course = await this.prisma.course.findUnique({ where: { id: courseId } });
    if (!course) throw new NotFoundException('Course not found');

    const isStaff = requesterRoles.some((r) => STAFF_ROLES.includes(r as Role));
    if (!isStaff) {
      const assignment = await this.prisma.courseAssignment.findUnique({
        where: { courseId_teacherId: { courseId, teacherId: requesterId } },
      });
      if (!assignment) throw new ForbiddenException('Chỉ giáo viên phụ trách hoặc quản trị mới quản lý được lịch dạy');
    }
    return course;
  }

  async create(courseId: string, requesterId: string, requesterRoles: string[], dto: CreateSessionDto) {
    const course = await this.assertCanManage(courseId, requesterId, requesterRoles);

    const start = new Date(dto.startTime);
    const end = new Date(dto.endTime);
    if (end <= start) throw new BadRequestException('Giờ kết thúc phải sau giờ bắt đầu');

    const session = await this.prisma.classSession.create({
      data: {
        courseId,
        teacherId: requesterId,
        title: dto.title,
        startTime: start,
        endTime: end,
        joinUrl: dto.joinUrl,
      },
    });

    const studentIds = (
      await this.prisma.enrollment.findMany({ where: { courseId }, select: { studentId: true } })
    ).map((e) => e.studentId);
    await this.notifications.createMany(
      studentIds,
      NotificationType.COURSE,
      'Có tiết học mới',
      `Tiết "${dto.title}" — khóa "${course.title}" vào ${start.toLocaleString('vi-VN')}.`,
    );

    return session;
  }

  async listForCourse(courseId: string, requesterId: string, requesterRoles: string[]) {
    await this.assertCanManage(courseId, requesterId, requesterRoles);
    return this.prisma.classSession.findMany({ where: { courseId }, orderBy: { startTime: 'asc' } });
  }

  async remove(id: string, requesterId: string, requesterRoles: string[]) {
    const session = await this.prisma.classSession.findUnique({ where: { id } });
    if (!session) throw new NotFoundException('Session not found');
    await this.assertCanManage(session.courseId, requesterId, requesterRoles);
    await this.prisma.classSession.delete({ where: { id } });
    return { deleted: true };
  }

  // All sessions for the courses a student is enrolled in (for the calendar grid).
  async listForStudent(studentId: string) {
    const sessions = await this.prisma.classSession.findMany({
      where: { course: { enrollments: { some: { studentId } } } },
      include: {
        course: { select: { title: true, slug: true } },
        teacher: { select: { name: true } },
      },
      orderBy: { startTime: 'asc' },
    });
    return sessions;
  }
}
