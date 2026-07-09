import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { AssignTeacherDto } from './dto/assign-teacher.dto';
import { Role } from '@prisma/client';

const STAFF_ROLES: Role[] = [Role.ADMIN, Role.SUPER_ADMIN, Role.CONTENT_MANAGER];

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  findPublished() {
    return this.prisma.course.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  // Public syllabus view: lesson titles/structure only. Video/content require
  // GET /lessons/:id, which enforces free-preview/enrollment/ownership checks.
  findBySlug(slug: string) {
    return this.prisma.course.findUnique({
      where: { slug },
      include: {
        chapters: {
          orderBy: { order: 'asc' },
          include: {
            lessons: {
              orderBy: { order: 'asc' },
              select: { id: true, title: true, order: true, isFreePreview: true },
            },
          },
        },
      },
    });
  }

  findMine(teacherId: string) {
    return this.prisma.course.findMany({
      where: { teacherId },
      orderBy: { createdAt: 'desc' },
    });
  }

  // Admin/Content Manager/Super Admin manage all courses; a Teacher only
  // manages courses they've been assigned to via CourseAssignment.
  findManageable(userId: string, roles: string[]) {
    if (roles.some((r) => STAFF_ROLES.includes(r as Role))) {
      return this.prisma.course.findMany({ orderBy: { createdAt: 'desc' } });
    }
    return this.prisma.course.findMany({
      where: { assignments: { some: { teacherId: userId } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  create(teacherId: string, dto: CreateCourseDto) {
    return this.prisma.course.create({
      data: {
        title: dto.title,
        slug: dto.slug,
        description: dto.description,
        level: dto.level,
        price: dto.price ?? 0,
        isFree: dto.isFree ?? false,
        isPublished: true,
        teacherId,
      },
    });
  }

  async assignTeacher(courseId: string, dto: AssignTeacherDto) {
    const course = await this.prisma.course.findUnique({ where: { id: courseId } });
    if (!course) throw new NotFoundException('Course not found');

    const teacher = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!teacher) throw new NotFoundException('No user found with this email');

    const existing = await this.prisma.courseAssignment.findUnique({
      where: { courseId_teacherId: { courseId, teacherId: teacher.id } },
    });
    if (existing) throw new ConflictException('Teacher is already assigned to this course');

    return this.prisma.courseAssignment.create({ data: { courseId, teacherId: teacher.id } });
  }

  listTeachers(courseId: string) {
    return this.prisma.courseAssignment.findMany({
      where: { courseId },
      include: { teacher: { select: { id: true, name: true, email: true } } },
      orderBy: { assignedAt: 'desc' },
    });
  }
}
