import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@Controller()
@UseGuards(JwtAuthGuard, RolesGuard)
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  @Post('courses/:courseId/sessions')
  @Roles(Role.TEACHER, Role.TEACHING_ASSISTANT, Role.CONTENT_MANAGER, Role.ADMIN)
  create(@Param('courseId') courseId: string, @CurrentUser() user: RequestUser, @Body() dto: CreateSessionDto) {
    return this.sessionsService.create(courseId, user.userId, user.roles, dto);
  }

  @Get('courses/:courseId/sessions')
  @Roles(Role.TEACHER, Role.TEACHING_ASSISTANT, Role.CONTENT_MANAGER, Role.ADMIN)
  listForCourse(@Param('courseId') courseId: string, @CurrentUser() user: RequestUser) {
    return this.sessionsService.listForCourse(courseId, user.userId, user.roles);
  }

  @Delete('sessions/:id')
  @Roles(Role.TEACHER, Role.TEACHING_ASSISTANT, Role.CONTENT_MANAGER, Role.ADMIN)
  remove(@Param('id') id: string, @CurrentUser() user: RequestUser) {
    return this.sessionsService.remove(id, user.userId, user.roles);
  }

  // Enrolled students (any authenticated user; service scopes to their enrollments)
  @Get('calendar/sessions')
  listMine(@CurrentUser() user: RequestUser) {
    return this.sessionsService.listForStudent(user.userId);
  }
}
