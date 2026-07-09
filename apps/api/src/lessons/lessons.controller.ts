import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@Controller()
@UseGuards(JwtAuthGuard, RolesGuard)
export class LessonsController {
  constructor(private lessonsService: LessonsService) {}

  @Post('chapters/:chapterId/lessons')
  @Roles(Role.CONTENT_MANAGER, Role.ADMIN)
  create(@Param('chapterId') chapterId: string, @CurrentUser() user: RequestUser, @Body() dto: CreateLessonDto) {
    return this.lessonsService.create(chapterId, user.userId, user.roles, dto);
  }

  @Get('lessons/:id')
  findOne(@Param('id') id: string, @CurrentUser() user: RequestUser) {
    return this.lessonsService.findByIdForUser(id, user.userId, user.roles);
  }
}
