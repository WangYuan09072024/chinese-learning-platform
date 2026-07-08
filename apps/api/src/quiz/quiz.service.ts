import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { SubmitAttemptDto } from './dto/submit-attempt.dto';
import { Role } from '@prisma/client';

const STAFF_ROLES: Role[] = [Role.ADMIN, Role.SUPER_ADMIN, Role.CONTENT_MANAGER];

function isCorrect(correctAnswer: unknown, submitted: unknown): boolean {
  if (Array.isArray(correctAnswer)) {
    const a = [...correctAnswer].map(String).sort();
    const b = Array.isArray(submitted) ? [...submitted].map(String).sort() : [];
    return a.length === b.length && a.every((v, i) => v === b[i]);
  }
  return String(correctAnswer ?? '').trim().toLowerCase() === String(submitted ?? '').trim().toLowerCase();
}

@Injectable()
export class QuizService {
  constructor(private prisma: PrismaService) {}

  private async assertLessonOwner(lessonId: string, requesterId: string, requesterRoles: string[]) {
    const lesson = await this.prisma.lesson.findUnique({
      where: { id: lessonId },
      include: { chapter: { include: { course: true } } },
    });
    if (!lesson) throw new NotFoundException('Lesson not found');

    const isOwner = lesson.chapter.course.teacherId === requesterId;
    const isStaff = requesterRoles.some((r) => STAFF_ROLES.includes(r as Role));
    if (!isOwner && !isStaff) throw new ForbiddenException('Only the course owner or staff can manage quizzes');
  }

  async createForLesson(lessonId: string, requesterId: string, requesterRoles: string[], dto: CreateQuizDto) {
    await this.assertLessonOwner(lessonId, requesterId, requesterRoles);

    return this.prisma.quiz.create({
      data: {
        lessonId,
        title: dto.title,
        questions: {
          create: dto.questions.map((q, index) => ({
            question: q.question,
            type: q.type,
            options: q.options,
            correctAnswer: q.correctAnswer,
            order: q.order ?? index,
          })),
        },
      },
      include: { questions: true },
    });
  }

  private async isOwnerOrStaff(quizId: string, requesterId: string, requesterRoles: string[]) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id: quizId },
      include: { lesson: { include: { chapter: { include: { course: true } } } } },
    });
    if (!quiz) throw new NotFoundException('Quiz not found');

    const isOwner = quiz.lesson.chapter.course.teacherId === requesterId;
    const isStaff = requesterRoles.some((r) => STAFF_ROLES.includes(r as Role));
    return { quiz, isOwner, isStaff };
  }

  async findByIdForUser(quizId: string, requesterId: string, requesterRoles: string[]) {
    const quiz = await this.prisma.quiz.findUnique({ where: { id: quizId }, include: { questions: true } });
    if (!quiz) throw new NotFoundException('Quiz not found');

    const { isOwner, isStaff } = await this.isOwnerOrStaff(quizId, requesterId, requesterRoles);
    if (isOwner || isStaff) return quiz;

    return {
      ...quiz,
      questions: quiz.questions.map((q) => ({ ...q, correctAnswer: null })),
    };
  }

  async attempt(quizId: string, studentId: string, dto: SubmitAttemptDto) {
    const quiz = await this.prisma.quiz.findUnique({ where: { id: quizId }, include: { questions: true } });
    if (!quiz) throw new NotFoundException('Quiz not found');

    const total = quiz.questions.length;
    const correctCount = quiz.questions.filter((q) => isCorrect(q.correctAnswer, dto.answers[q.id])).length;
    const score = total === 0 ? 0 : Math.round((correctCount / total) * 100);

    const attempt = await this.prisma.quizAttempt.create({
      data: { quizId, studentId, answers: dto.answers, score },
    });

    return { ...attempt, correctCount, total };
  }

  async listAttempts(quizId: string, requesterId: string, requesterRoles: string[]) {
    const { isOwner, isStaff } = await this.isOwnerOrStaff(quizId, requesterId, requesterRoles);
    if (!isOwner && !isStaff) throw new ForbiddenException('Only the course owner or staff can view attempts');

    return this.prisma.quizAttempt.findMany({
      where: { quizId },
      include: { student: { select: { id: true, name: true, email: true } } },
      orderBy: { submittedAt: 'desc' },
    });
  }
}
