import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EnrollDto } from './dto/enroll.dto';
import { Role, NotificationType } from '@prisma/client';
import { NotificationsService } from '../notifications/notifications.service';

const STAFF_ROLES: Role[] = [Role.ADMIN, Role.SUPER_ADMIN, Role.CONTENT_MANAGER];

@Injectable()
export class EnrollmentsService {
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
      if (!assignment) throw new ForbiddenException('Only the assigned teacher or staff can manage enrollment');
    }
    return course;
  }

  async enroll(courseId: string, requesterId: string, requesterRoles: string[], dto: EnrollDto) {
    const course = await this.assertCanManage(courseId, requesterId, requesterRoles);

    const student = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!student) throw new NotFoundException('No user found with this email');

    const existing = await this.prisma.enrollment.findUnique({
      where: { studentId_courseId: { studentId: student.id, courseId } },
    });
    if (existing) throw new ConflictException('Student is already enrolled in this course');

    const enrollment = await this.prisma.enrollment.create({
      data: { studentId: student.id, courseId },
    });

    await this.notifications.create(
      student.id,
      NotificationType.COURSE,
      'Đã ghi danh khóa học',
      `Bạn đã được ghi danh vào khóa học "${course.title}".`,
    );

    return enrollment;
  }

  // Any authenticated user can self-enroll into a FREE course.
  async selfEnroll(courseId: string, studentId: string) {
    const course = await this.prisma.course.findUnique({ where: { id: courseId } });
    if (!course) throw new NotFoundException('Course not found');
    if (!course.isFree) {
      throw new ForbiddenException('Khóa học này không miễn phí, cần được ghi danh bởi giáo viên/trung tâm.');
    }

    const existing = await this.prisma.enrollment.findUnique({
      where: { studentId_courseId: { studentId, courseId } },
    });
    if (existing) return existing;

    const enrollment = await this.prisma.enrollment.create({ data: { studentId, courseId } });

    await this.notifications.create(
      studentId,
      NotificationType.COURSE,
      'Đã đăng ký khóa học',
      `Bạn đã đăng ký khóa học "${course.title}". Chúc bạn học vui!`,
    );

    return enrollment;
  }

  async listStudents(courseId: string, requesterId: string, requesterRoles: string[]) {
    await this.assertCanManage(courseId, requesterId, requesterRoles);

    return this.prisma.enrollment.findMany({
      where: { courseId },
      include: { student: { select: { id: true, name: true, email: true } } },
      orderBy: { enrolledAt: 'desc' },
    });
  }

  listMine(studentId: string) {
    return this.prisma.enrollment.findMany({
      where: { studentId },
      include: { course: true },
      orderBy: { enrolledAt: 'desc' },
    });
  }
}
