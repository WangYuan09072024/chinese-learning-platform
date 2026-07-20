import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import { Role, NotificationType } from '@prisma/client';
import { BroadcastDto } from './dto/broadcast.dto';

@Injectable()
export class AdminService {
  constructor(
    private prisma: PrismaService,
    private notifications: NotificationsService,
  ) {}

  async stats() {
    const [users, courses, publishedCourses, enrollments, sessions, submissions, gradedSubs, quizzes, announcements, contactMessages] =
      await Promise.all([
        this.prisma.user.findMany({ select: { roles: true } }),
        this.prisma.course.count(),
        this.prisma.course.count({ where: { isPublished: true } }),
        this.prisma.enrollment.count(),
        this.prisma.classSession.count(),
        this.prisma.homeworkSubmission.count(),
        this.prisma.homeworkSubmission.count({ where: { status: 'GRADED' } }),
        this.prisma.quiz.count(),
        this.prisma.announcement.count(),
        this.prisma.contactMessage.count(),
      ]);

    const roleCount = (role: Role) => users.filter((u) => u.roles.includes(role)).length;

    return {
      userCount: users.length,
      studentCount: roleCount(Role.STUDENT),
      teacherCount: roleCount(Role.TEACHER) + roleCount(Role.TEACHING_ASSISTANT),
      adminCount: roleCount(Role.ADMIN) + roleCount(Role.SUPER_ADMIN),
      courseCount: courses,
      publishedCourseCount: publishedCourses,
      enrollmentCount: enrollments,
      sessionCount: sessions,
      submissionCount: submissions,
      gradedCount: gradedSubs,
      pendingGradingCount: submissions - gradedSubs,
      quizCount: quizzes,
      announcementCount: announcements,
      contactMessageCount: contactMessages,
    };
  }

  // Broadcast a notification to everyone, or to a single role.
  async broadcast(dto: BroadcastDto) {
    const users = await this.prisma.user.findMany({
      where: dto.role ? { roles: { has: dto.role } } : { isActive: true },
      select: { id: true },
    });
    const ids = users.map((u) => u.id);
    await this.notifications.createMany(ids, NotificationType.SYSTEM, dto.title, dto.message);
    return { sent: ids.length };
  }
}
