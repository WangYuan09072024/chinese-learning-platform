import { Controller, Get, UseGuards } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@Controller('teacher')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.TEACHER, Role.TEACHING_ASSISTANT, Role.CONTENT_MANAGER, Role.ADMIN)
export class TeacherController {
  constructor(private teacherService: TeacherService) {}

  @Get('classes')
  classes(@CurrentUser() user: RequestUser) {
    return this.teacherService.listClasses(user.userId, user.roles);
  }

  @Get('students')
  students(@CurrentUser() user: RequestUser) {
    return this.teacherService.listStudents(user.userId, user.roles);
  }

  @Get('homework')
  homework(@CurrentUser() user: RequestUser) {
    return this.teacherService.listHomework(user.userId, user.roles);
  }

  @Get('quizzes')
  quizzes(@CurrentUser() user: RequestUser) {
    return this.teacherService.listQuizzes(user.userId, user.roles);
  }

  @Get('announcements')
  announcements(@CurrentUser() user: RequestUser) {
    return this.teacherService.listAnnouncements(user.userId, user.roles);
  }

  @Get('sessions')
  sessions(@CurrentUser() user: RequestUser) {
    return this.teacherService.listSessions(user.userId, user.roles);
  }

  @Get('stats')
  stats(@CurrentUser() user: RequestUser) {
    return this.teacherService.stats(user.userId, user.roles);
  }
}
