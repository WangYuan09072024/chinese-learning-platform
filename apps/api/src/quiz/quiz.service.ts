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

  private async assertCanManage(lessonId: string, requesterRoles: string[]) {
    const lesson = await this.prisma.lesson.findUnique({ where: { id: lessonId } });
    if (!lesson) throw new NotFoundException('Lesson not found');

    const isStaff = requesterRoles.some((r) => STAFF_ROLES.includes(r as Role));
    if (!isStaff) throw new ForbiddenException('Only Admin/Content Manager can manage quizzes');
  }

  async createForLesson(lessonId: string, requesterId: string, requesterRoles: string[], dto: CreateQuizDto) {
    await this.assertCanManage(lessonId, requesterRoles);

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

  private async isTeachingStaff(quizId: string, requesterId: string, requesterRoles: string[]) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id: quizId },
      include: { lesson: { include: { chapter: { include: { course: true } } } } },
    });
    if (!quiz) throw new NotFoundException('Quiz not found');

    const isStaff = requesterRoles.some((r) => STAFF_ROLES.includes(r as Role));
    const isAssignedTeacher = isStaff
      ? false
      : Boolean(
          await this.prisma.courseAssignment.findUnique({
            where: {
              courseId_teacherId: { courseId: quiz.lesson.chapter.course.id, teacherId: requesterId },
            },
          }),
        );
    return { quiz, isEntitled: isStaff || isAssignedTeacher };
  }

  async findByIdForUser(quizId: string, requesterId: string, requesterRoles: string[]) {
    const quiz = await this.prisma.quiz.findUnique({ where: { id: quizId }, include: { questions: true } });
    if (!quiz) throw new NotFoundException('Quiz not found');

    const { isEntitled } = await this.isTeachingStaff(quizId, requesterId, requesterRoles);
    if (isEntitled) return quiz;

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
    const { isEntitled } = await this.isTeachingStaff(quizId, requesterId, requesterRoles);
    if (!isEntitled) throw new ForbiddenException('Only the assigned teacher or staff can view attempts');

    return this.prisma.quizAttempt.findMany({
      where: { quizId },
      include: { student: { select: { id: true, name: true, email: true } } },
      orderBy: { submittedAt: 'desc' },
    });
  }
}
