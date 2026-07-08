import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Role } from '@prisma/client';

const STAFF_ROLES: Role[] = [Role.ADMIN, Role.SUPER_ADMIN, Role.CONTENT_MANAGER];

@Injectable()
export class LessonsService {
  constructor(private prisma: PrismaService) {}

  async create(chapterId: string, requesterId: string, requesterRoles: string[], dto: CreateLessonDto) {
    const chapter = await this.prisma.chapter.findUnique({ where: { id: chapterId }, include: { course: true } });
    if (!chapter) throw new NotFoundException('Chapter not found');

    const isOwner = chapter.course.teacherId === requesterId;
    const isStaff = requesterRoles.some((r) => STAFF_ROLES.includes(r as Role));
    if (!isOwner && !isStaff) {
      throw new ForbiddenException('Only the course owner or staff can add lessons');
    }

    return this.prisma.lesson.create({
      data: {
        chapterId,
        title: dto.title,
        order: dto.order,
        videoUrl: dto.videoUrl,
        content: dto.content,
        isFreePreview: dto.isFreePreview ?? false,
      },
    });
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

    const isOwner = lesson.chapter.course.teacherId === requesterId;
    const isStaff = requesterRoles.some((r) => STAFF_ROLES.includes(r as Role));

    if (!lesson.isFreePreview && !isOwner && !isStaff) {
      const enrollment = await this.prisma.enrollment.findUnique({
        where: { studentId_courseId: { studentId: requesterId, courseId: lesson.chapter.course.id } },
      });
      if (!enrollment) {
        throw new ForbiddenException('You must be enrolled in this course to access this lesson');
      }
    }

    // Hide correct answers from non-owner/non-staff viewers, and surface the
    // requester's own submission/attempts so the UI can show prior results
    // instead of a blank form.
    if (!isOwner && !isStaff) {
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

      return { ...lesson, homework: homeworkWithMine, quizzes: quizzesWithMine };
    }

    return lesson;
  }
}
