import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role, SubmissionStatus } from '@prisma/client';

const STAFF_ROLES: Role[] = [Role.ADMIN, Role.SUPER_ADMIN, Role.CONTENT_MANAGER];

@Injectable()
export class TeacherService {
  constructor(private prisma: PrismaService) {}

  // The course ids a user may manage: staff see all, a teacher only sees the
  // courses they've been assigned to (CourseAssignment).
  private async manageableCourseIds(userId: string, roles: string[]): Promise<string[]> {
    const isStaff = roles.some((r) => STAFF_ROLES.includes(r as Role));
    const courses = await this.prisma.course.findMany({
      where: isStaff ? {} : { assignments: { some: { teacherId: userId } } },
      select: { id: true },
    });
    return courses.map((c) => c.id);
  }

  async listClasses(userId: string, roles: string[]) {
    const ids = await this.manageableCourseIds(userId, roles);
    const courses = await this.prisma.course.findMany({
      where: { id: { in: ids } },
      orderBy: { createdAt: 'desc' },
      include: {
        _count: { select: { enrollments: true, classSessions: true } },
        chapters: { select: { _count: { select: { lessons: true } } } },
      },
    });
    return courses.map((c) => ({
      id: c.id,
      title: c.title,
      slug: c.slug,
      level: c.level,
      isFree: c.isFree,
      isPublished: c.isPublished,
      studentCount: c._count.enrollments,
      sessionCount: c._count.classSessions,
      lessonCount: c.chapters.reduce((sum, ch) => sum + ch._count.lessons, 0),
    }));
  }

  async listStudents(userId: string, roles: string[]) {
    const ids = await this.manageableCourseIds(userId, roles);
    const enrollments = await this.prisma.enrollment.findMany({
      where: { courseId: { in: ids } },
      orderBy: { enrolledAt: 'desc' },
      include: {
        student: { select: { id: true, name: true, email: true } },
        course: { select: { id: true, title: true, slug: true } },
      },
    });
    return enrollments.map((e) => ({
      enrollmentId: e.id,
      studentId: e.student.id,
      name: e.student.name,
      email: e.student.email,
      courseTitle: e.course.title,
      courseSlug: e.course.slug,
      progress: e.progress,
      status: e.status,
      enrolledAt: e.enrolledAt,
    }));
  }

  async listHomework(userId: string, roles: string[]) {
    const ids = await this.manageableCourseIds(userId, roles);
    const homework = await this.prisma.homework.findMany({
      where: { lesson: { chapter: { courseId: { in: ids } } } },
      orderBy: { createdAt: 'desc' },
      include: {
        lesson: {
          select: {
            id: true,
            title: true,
            chapter: { select: { course: { select: { id: true, title: true, slug: true } } } },
          },
        },
        submissions: { select: { status: true } },
      },
    });
    return homework.map((h) => {
      const total = h.submissions.length;
      const graded = h.submissions.filter((s) => s.status === SubmissionStatus.GRADED).length;
      return {
        id: h.id,
        title: h.title,
        dueDate: h.dueDate,
        lessonTitle: h.lesson.title,
        courseTitle: h.lesson.chapter.course.title,
        courseSlug: h.lesson.chapter.course.slug,
        submissionCount: total,
        gradedCount: graded,
        pendingCount: total - graded,
      };
    });
  }

  async listQuizzes(userId: string, roles: string[]) {
    const ids = await this.manageableCourseIds(userId, roles);
    const quizzes = await this.prisma.quiz.findMany({
      where: { lesson: { chapter: { courseId: { in: ids } } } },
      orderBy: { createdAt: 'desc' },
      include: {
        lesson: {
          select: {
            title: true,
            chapter: { select: { course: { select: { title: true, slug: true } } } },
          },
        },
        _count: { select: { questions: true, attempts: true } },
      },
    });
    return quizzes.map((q) => ({
      id: q.id,
      title: q.title,
      lessonTitle: q.lesson.title,
      courseTitle: q.lesson.chapter.course.title,
      courseSlug: q.lesson.chapter.course.slug,
      questionCount: q._count.questions,
      attemptCount: q._count.attempts,
    }));
  }

  async listAnnouncements(userId: string, roles: string[]) {
    const ids = await this.manageableCourseIds(userId, roles);
    const items = await this.prisma.announcement.findMany({
      where: { courseId: { in: ids } },
      orderBy: { createdAt: 'desc' },
      take: 100,
      include: {
        course: { select: { title: true, slug: true } },
        author: { select: { name: true } },
      },
    });
    return items.map((a) => ({
      id: a.id,
      title: a.title,
      body: a.body,
      courseTitle: a.course.title,
      authorName: a.author.name,
      createdAt: a.createdAt,
    }));
  }

  async listSessions(userId: string, roles: string[]) {
    const ids = await this.manageableCourseIds(userId, roles);
    const sessions = await this.prisma.classSession.findMany({
      where: { courseId: { in: ids } },
      orderBy: { startTime: 'desc' },
      include: {
        course: { select: { title: true, slug: true } },
        _count: { select: { attendance: true } },
      },
    });
    return sessions.map((s) => ({
      id: s.id,
      title: s.title,
      startTime: s.startTime,
      endTime: s.endTime,
      courseTitle: s.course.title,
      courseSlug: s.course.slug,
      markedCount: s._count.attendance,
    }));
  }

  // Lightweight portal-wide stats for the Reports page.
  async stats(userId: string, roles: string[]) {
    const ids = await this.manageableCourseIds(userId, roles);
    const [students, sessions, submissions, gradedSubs, quizzes] = await Promise.all([
      this.prisma.enrollment.count({ where: { courseId: { in: ids } } }),
      this.prisma.classSession.count({ where: { courseId: { in: ids } } }),
      this.prisma.homeworkSubmission.count({
        where: { homework: { lesson: { chapter: { courseId: { in: ids } } } } },
      }),
      this.prisma.homeworkSubmission.count({
        where: {
          status: SubmissionStatus.GRADED,
          homework: { lesson: { chapter: { courseId: { in: ids } } } },
        },
      }),
      this.prisma.quiz.count({ where: { lesson: { chapter: { courseId: { in: ids } } } } }),
    ]);
    return {
      courseCount: ids.length,
      studentCount: students,
      sessionCount: sessions,
      submissionCount: submissions,
      gradedCount: gradedSubs,
      pendingGradingCount: submissions - gradedSubs,
      quizCount: quizzes,
    };
  }
}
