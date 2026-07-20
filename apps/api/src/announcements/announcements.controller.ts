import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@Controller()
@UseGuards(JwtAuthGuard, RolesGuard)
export class AnnouncementsController {
  constructor(private announcementsService: AnnouncementsService) {}

  @Post('courses/:courseId/announcements')
  @Roles(Role.TEACHER, Role.TEACHING_ASSISTANT, Role.CONTENT_MANAGER, Role.ADMIN)
  create(@Param('courseId') courseId: string, @CurrentUser() user: RequestUser, @Body() dto: CreateAnnouncementDto) {
    return this.announcementsService.create(courseId, user.userId, user.roles, dto);
  }

  @Get('courses/:courseId/announcements')
  @Roles(Role.TEACHER, Role.TEACHING_ASSISTANT, Role.CONTENT_MANAGER, Role.ADMIN)
  listForCourse(@Param('courseId') courseId: string, @CurrentUser() user: RequestUser) {
    return this.announcementsService.listForCourse(courseId, user.userId, user.roles);
  }

  @Delete('announcements/:id')
  @Roles(Role.TEACHER, Role.TEACHING_ASSISTANT, Role.CONTENT_MANAGER, Role.ADMIN)
  remove(@Param('id') id: string, @CurrentUser() user: RequestUser) {
    return this.announcementsService.remove(id, user.userId, user.roles);
  }

  // Enrolled students (any authenticated user; service scopes to their enrollments)
  @Get('announcements/me')
  listMine(@CurrentUser() user: RequestUser) {
    return this.announcementsService.listForStudent(user.userId);
  }
}
