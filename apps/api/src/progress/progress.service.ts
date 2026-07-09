import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProgressService {
  constructor(private prisma: PrismaService) {}

  async getMyProgress(studentId: string) {
    const enrollments = await this.prisma.enrollment.findMany({
      where: { studentId },
      include: { course: true },
    });

    const courses = await Promise.all(
      enrollments.map(async (e) => {
        const totalLessons = await this.prisma.lesson.count({ where: { chapter: { courseId: e.courseId } } });
        const completedLessons = await this.prisma.lessonCompletion.count({
          where: { studentId, lesson: { chapter: { courseId: e.courseId } } },
        });
        return {
          courseId: e.courseId,
          courseTitle: e.course.title,
          courseSlug: e.course.slug,
          totalLessons,
          completedLessons,
          percent: totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100),
        };
      }),
    );

    const submissions = await this.prisma.homeworkSubmission.findMany({ where: { studentId } });
    const gradedSubmissions = submissions.filter((s) => s.grade != null);
    const averageHomeworkGrade =
      gradedSubmissions.length === 0
        ? null
        : Math.round(gradedSubmissions.reduce((sum, s) => sum + (s.grade ?? 0), 0) / gradedSubmissions.length);

    const attempts = await this.prisma.quizAttempt.findMany({ where: { studentId } });
    const averageQuizScore =
      attempts.length === 0 ? null : Math.round(attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length);

    return {
      courses,
      totalHomeworkSubmitted: submissions.length,
      totalHomeworkGraded: gradedSubmissions.length,
      averageHomeworkGrade,
      totalQuizAttempts: attempts.length,
      averageQuizScore,
    };
  }
}
