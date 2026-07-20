import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { Role, NotificationType } from '@prisma/client';
import { NotificationsService } from '../notifications/notifications.service';

const STAFF_ROLES: Role[] = [Role.ADMIN, Role.SUPER_ADMIN, Role.CONTENT_MANAGER];

@Injectable()
export class AnnouncementsService {
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
      if (!assignment) throw new ForbiddenException('Chỉ giáo viên phụ trách hoặc quản trị mới đăng được thông báo');
    }
    return course;
  }

  async create(courseId: string, requesterId: string, requesterRoles: string[], dto: CreateAnnouncementDto) {
    const course = await this.assertCanManage(courseId, requesterId, requesterRoles);

    const announcement = await this.prisma.announcement.create({
      data: { courseId, authorId: requesterId, title: dto.title, body: dto.body },
    });

    const studentIds = (
      await this.prisma.enrollment.findMany({ where: { courseId }, select: { studentId: true } })
    ).map((e) => e.studentId);
    await this.notifications.createMany(
      studentIds,
      NotificationType.COURSE,
      `Thông báo mới: ${dto.title}`,
      `Khóa "${course.title}": ${dto.body.slice(0, 140)}`,
    );

    return announcement;
  }

  async listForCourse(courseId: string, requesterId: string, requesterRoles: string[]) {
    await this.assertCanManage(courseId, requesterId, requesterRoles);
    return this.prisma.announcement.findMany({
      where: { courseId },
      orderBy: { createdAt: 'desc' },
      include: { author: { select: { name: true } } },
    });
  }

  async remove(id: string, requesterId: string, requesterRoles: string[]) {
    const announcement = await this.prisma.announcement.findUnique({ where: { id } });
    if (!announcement) throw new NotFoundException('Announcement not found');
    await this.assertCanManage(announcement.courseId, requesterId, requesterRoles);
    await this.prisma.announcement.delete({ where: { id } });
    return { deleted: true };
  }

  // Announcements for the courses a student is enrolled in.
  listForStudent(studentId: string) {
    return this.prisma.announcement.findMany({
      where: { course: { enrollments: { some: { studentId } } } },
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: {
        course: { select: { title: true, slug: true } },
        author: { select: { name: true } },
      },
    });
  }
}
