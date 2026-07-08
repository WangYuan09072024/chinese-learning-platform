import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';

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
}
