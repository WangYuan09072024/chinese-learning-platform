import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@Controller('courses/:courseId/chapters')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ChaptersController {
  constructor(private chaptersService: ChaptersService) {}

  @Post()
  @Roles(Role.TEACHER, Role.CONTENT_MANAGER, Role.ADMIN)
  create(@Param('courseId') courseId: string, @CurrentUser() user: RequestUser, @Body() dto: CreateChapterDto) {
    return this.chaptersService.create(courseId, user.userId, user.roles, dto);
  }
}
