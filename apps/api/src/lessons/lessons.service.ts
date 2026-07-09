import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Role, NotificationType } from '@prisma/client';
import { NotificationsService } from '../notifications/notifications.service';

const STAFF_ROLES: Role[] = [Role.ADMIN, Role.SUPER_ADMIN, Role.CONTENT_MANAGER];

@Injectable()
export class LessonsService {
  constructor(
    private prisma: PrismaService,
    private notifications: NotificationsService,
  ) {}

  async create(chapterId: string, requesterId: string, requesterRoles: string[], dto: CreateLessonDto) {
    const chapter = await this.prisma.chapter.findUnique({ where: { id: chapterId }, include: { course: true } });
    if (!chapter) throw new NotFoundException('Chapter not found');

    const isStaff = requesterRoles.some((r) => STAFF_ROLES.includes(r as Role));
    if (!isStaff) {
      throw new ForbiddenException('Only Admin/Content Manager can add lessons');
    }

    const lesson = await this.prisma.lesson.create({
      data: {
        chapterId,
        title: dto.title,
        order: dto.order,
        videoUrl: dto.videoUrl,
        content: dto.content,
        isFreePreview: dto.isFreePreview ?? false,
      },
    });

    const enrolledStudentIds = (
      await this.prisma.enrollment.findMany({ where: { courseId: chapter.courseId }, select: { studentId: true } })
    ).map((e) => e.studentId);
    await this.notifications.createMany(
      enrolledStudentIds,
      NotificationType.COURSE,
      'Bài học mới',
      `Bài học mới "${lesson.title}" đã được thêm vào khóa học "${chapter.course.title}".`,
    );

    return lesson;
  }

  async findByIdForUser(lessonId: string, requesterId: string, requesterRoles: string[]) {
    const lesson = await this.prisma.lesson.findUnique({
      where: { id: lessonId },
      include: {
        chapter: { include: { course: true } },
        vocabulary: true,
        grammar: true,
        homework: true,
        quizzes: { include: { questions: true } },
      },
    });
    if (!lesson) throw new NotFoundException('Lesson not found');

    const isStaff = requesterRoles.some((r) => STAFF_ROLES.includes(r as Role));
    const isAssignedTeacher = isStaff
      ? false
      : Boolean(
          await this.prisma.courseAssignment.findUnique({
            where: { courseId_teacherId: { courseId: lesson.chapter.course.id, teacherId: requesterId } },
          }),
        );
    const isTeachingStaff = isStaff || isAssignedTeacher;

    if (!lesson.isFreePreview && !isTeachingStaff) {
      const enrollment = await this.prisma.enrollment.findUnique({
        where: { studentId_courseId: { studentId: requesterId, courseId: lesson.chapter.course.id } },
      });
      if (!enrollment) {
        throw new ForbiddenException('You must be enrolled in this course to access this lesson');
      }
    }

    // Hide correct answers from students, and surface the requester's own
    // submission/attempts so the UI can show prior results instead of a
    // blank form.
    if (!isTeachingStaff) {
      const completion = await this.prisma.lessonCompletion.findUnique({
        where: { studentId_lessonId: { studentId: requesterId, lessonId: lesson.id } },
      });

      const homeworkWithMine = await Promise.all(
        lesson.homework.map(async (hw) => ({
          ...hw,
          mySubmission: await this.prisma.homeworkSubmission.findUnique({
            where: { homeworkId_studentId: { homeworkId: hw.id, studentId: requesterId } },
          }),
        })),
      );

      const quizzesWithMine = await Promise.all(
        lesson.quizzes.map(async (quiz) => ({
          ...quiz,
          questions: quiz.questions.map((q) => ({ ...q, correctAnswer: null })),
          myAttempts: await this.prisma.quizAttempt.findMany({
            where: { quizId: quiz.id, studentId: requesterId },
            orderBy: { submittedAt: 'desc' },
          }),
        })),
      );

      return { ...lesson, isCompleted: Boolean(completion), homework: homeworkWithMine, quizzes: quizzesWithMine };
    }

    return lesson;
  }

  async markComplete(lessonId: string, studentId: string) {
    const lesson = await this.prisma.lesson.findUnique({ where: { id: lessonId }, include: { chapter: true } });
    if (!lesson) throw new NotFoundException('Lesson not found');

    await this.prisma.lessonCompletion.upsert({
      where: { studentId_lessonId: { studentId, lessonId } },
      update: {},
      create: { studentId, lessonId },
    });

    const courseId = lesson.chapter.courseId;
    const totalLessons = await this.prisma.lesson.count({ where: { chapter: { courseId } } });
    const completedLessons = await this.prisma.lessonCompletion.count({
      where: { studentId, lesson: { chapter: { courseId } } },
    });
    const progress = totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100);

    await this.prisma.enrollment.updateMany({ where: { studentId, courseId }, data: { progress } });

    return { completed: true, progress };
  }
}
