import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EnrollDto } from './dto/enroll.dto';
import { Role } from '@prisma/client';

const STAFF_ROLES: Role[] = [Role.ADMIN, Role.SUPER_ADMIN, Role.CONTENT_MANAGER];

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}

  private async assertCanManage(courseId: string, requesterId: string, requesterRoles: string[]) {
    const course = await this.prisma.course.findUnique({ where: { id: courseId } });
    if (!course) throw new NotFoundException('Course not found');

    const isOwner = course.teacherId === requesterId;
    const isStaff = requesterRoles.some((r) => STAFF_ROLES.includes(r as Role));
    if (!isOwner && !isStaff) {
      throw new ForbiddenException('Only the course owner or staff can manage enrollment');
    }
    return course;
  }

  async enroll(courseId: string, requesterId: string, requesterRoles: string[], dto: EnrollDto) {
    await this.assertCanManage(courseId, requesterId, requesterRoles);

    const student = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!student) throw new NotFoundException('No user found with this email');

    const existing = await this.prisma.enrollment.findUnique({
      where: { studentId_courseId: { studentId: student.id, courseId } },
    });
    if (existing) throw new ConflictException('Student is already enrolled in this course');

    return this.prisma.enrollment.create({
      data: { studentId: student.id, courseId },
    });
  }

  async listStudents(courseId: string, requesterId: string, requesterRoles: string[]) {
    await this.assertCanManage(courseId, requesterId, requesterRoles);

    return this.prisma.enrollment.findMany({
      where: { courseId },
      include: { student: { select: { id: true, name: true, email: true } } },
      orderBy: { enrolledAt: 'desc' },
    });
  }

  listMine(studentId: string) {
    return this.prisma.enrollment.findMany({
      where: { studentId },
      include: { course: true },
      orderBy: { enrolledAt: 'desc' },
    });
  }
}
