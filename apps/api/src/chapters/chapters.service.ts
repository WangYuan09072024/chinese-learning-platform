import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { Role } from '@prisma/client';

const STAFF_ROLES: Role[] = [Role.ADMIN, Role.SUPER_ADMIN, Role.CONTENT_MANAGER];

@Injectable()
export class ChaptersService {
  constructor(private prisma: PrismaService) {}

  async create(courseId: string, requesterId: string, requesterRoles: string[], dto: CreateChapterDto) {
    const course = await this.prisma.course.findUnique({ where: { id: courseId } });
    if (!course) throw new NotFoundException('Course not found');

    const isOwner = course.teacherId === requesterId;
    const isStaff = requesterRoles.some((r) => STAFF_ROLES.includes(r as Role));
    if (!isOwner && !isStaff) {
      throw new ForbiddenException('Only the course owner or staff can add chapters');
    }

    return this.prisma.chapter.create({
      data: { courseId, title: dto.title, order: dto.order },
    });
  }
}
