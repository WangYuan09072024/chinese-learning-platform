import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CalendarService {
  constructor(private prisma: PrismaService) {}

  async getUpcomingForStudent(studentId: string) {
    const homework = await this.prisma.homework.findMany({
      where: {
        dueDate: { not: null },
        lesson: { chapter: { course: { enrollments: { some: { studentId } } } } },
      },
      include: {
        lesson: { include: { chapter: { include: { course: true } } } },
        submissions: { where: { studentId } },
      },
      orderBy: { dueDate: 'asc' },
    });

    return homework.map((hw) => ({
      id: hw.id,
      title: hw.title,
      dueDate: hw.dueDate,
      courseTitle: hw.lesson.chapter.course.title,
      courseSlug: hw.lesson.chapter.course.slug,
      lessonId: hw.lesson.id,
      lessonTitle: hw.lesson.title,
      submitted: hw.submissions.length > 0,
      graded: hw.submissions.some((s) => s.grade != null),
    }));
  }
}
