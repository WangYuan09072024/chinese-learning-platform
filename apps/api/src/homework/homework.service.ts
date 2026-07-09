import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHomeworkDto } from './dto/create-homework.dto';
import { SubmitHomeworkDto } from './dto/submit-homework.dto';
import { GradeSubmissionDto } from './dto/grade-submission.dto';
import { Role, SubmissionStatus } from '@prisma/client';

const STAFF_ROLES: Role[] = [Role.ADMIN, Role.SUPER_ADMIN, Role.CONTENT_MANAGER];

@Injectable()
export class HomeworkService {
  constructor(private prisma: PrismaService) {}

  private async isEntitled(courseId: string, requesterId: string, requesterRoles: string[]) {
    const isStaff = requesterRoles.some((r) => STAFF_ROLES.includes(r as Role));
    if (isStaff) return true;

    const assignment = await this.prisma.courseAssignment.findUnique({
      where: { courseId_teacherId: { courseId, teacherId: requesterId } },
    });
    return Boolean(assignment);
  }

  private async assertCanManageLesson(lessonId: string, requesterId: string, requesterRoles: string[]) {
    const lesson = await this.prisma.lesson.findUnique({
      where: { id: lessonId },
      include: { chapter: { include: { course: true } } },
    });
    if (!lesson) throw new NotFoundException('Lesson not found');

    const entitled = await this.isEntitled(lesson.chapter.course.id, requesterId, requesterRoles);
    if (!entitled) throw new ForbiddenException('Only the assigned teacher or staff can manage homework');
    return lesson;
  }

  private async assertCanManageHomework(homeworkId: string, requesterId: string, requesterRoles: string[]) {
    const homework = await this.prisma.homework.findUnique({
      where: { id: homeworkId },
      include: { lesson: { include: { chapter: { include: { course: true } } } } },
    });
    if (!homework) throw new NotFoundException('Homework not found');

    const entitled = await this.isEntitled(homework.lesson.chapter.course.id, requesterId, requesterRoles);
    if (!entitled) throw new ForbiddenException('Only the assigned teacher or staff can access this');
    return homework;
  }

  async createForLesson(lessonId: string, requesterId: string, requesterRoles: string[], dto: CreateHomeworkDto) {
    await this.assertCanManageLesson(lessonId, requesterId, requesterRoles);

    return this.prisma.homework.create({
      data: {
        lessonId,
        title: dto.title,
        description: dto.description,
        dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
      },
    });
  }

  async submit(homeworkId: string, studentId: string, dto: SubmitHomeworkDto) {
    const homework = await this.prisma.homework.findUnique({ where: { id: homeworkId } });
    if (!homework) throw new NotFoundException('Homework not found');

    const isLate = homework.dueDate ? new Date() > homework.dueDate : false;

    return this.prisma.homeworkSubmission.upsert({
      where: { homeworkId_studentId: { homeworkId, studentId } },
      update: { content: dto.content, fileUrl: dto.fileUrl, status: isLate ? SubmissionStatus.LATE : SubmissionStatus.SUBMITTED, submittedAt: new Date() },
      create: {
        homeworkId,
        studentId,
        content: dto.content,
        fileUrl: dto.fileUrl,
        status: isLate ? SubmissionStatus.LATE : SubmissionStatus.SUBMITTED,
      },
    });
  }

  async listSubmissions(homeworkId: string, requesterId: string, requesterRoles: string[]) {
    await this.assertCanManageHomework(homeworkId, requesterId, requesterRoles);

    return this.prisma.homeworkSubmission.findMany({
      where: { homeworkId },
      include: { student: { select: { id: true, name: true, email: true } } },
      orderBy: { submittedAt: 'desc' },
    });
  }

  async grade(submissionId: string, requesterId: string, requesterRoles: string[], dto: GradeSubmissionDto) {
    const submission = await this.prisma.homeworkSubmission.findUnique({
      where: { id: submissionId },
      include: { homework: { include: { lesson: { include: { chapter: { include: { course: true } } } } } } },
    });
    if (!submission) throw new NotFoundException('Submission not found');

    const entitled = await this.isEntitled(submission.homework.lesson.chapter.course.id, requesterId, requesterRoles);
    if (!entitled) throw new ForbiddenException('Only the assigned teacher or staff can grade this');

    return this.prisma.homeworkSubmission.update({
      where: { id: submissionId },
      data: { grade: dto.grade, feedback: dto.feedback, status: SubmissionStatus.GRADED, gradedAt: new Date() },
    });
  }
}
