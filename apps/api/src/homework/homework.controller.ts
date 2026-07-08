import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { HomeworkService } from './homework.service';
import { CreateHomeworkDto } from './dto/create-homework.dto';
import { SubmitHomeworkDto } from './dto/submit-homework.dto';
import { GradeSubmissionDto } from './dto/grade-submission.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@Controller()
@UseGuards(JwtAuthGuard, RolesGuard)
export class HomeworkController {
  constructor(private homeworkService: HomeworkService) {}

  @Post('lessons/:lessonId/homework')
  @Roles(Role.TEACHER, Role.CONTENT_MANAGER, Role.ADMIN)
  create(@Param('lessonId') lessonId: string, @CurrentUser() user: RequestUser, @Body() dto: CreateHomeworkDto) {
    return this.homeworkService.createForLesson(lessonId, user.userId, user.roles, dto);
  }

  @Post('homework/:id/submissions')
  submit(@Param('id') id: string, @CurrentUser() user: RequestUser, @Body() dto: SubmitHomeworkDto) {
    return this.homeworkService.submit(id, user.userId, dto);
  }

  @Get('homework/:id/submissions')
  @Roles(Role.TEACHER, Role.CONTENT_MANAGER, Role.ADMIN)
  listSubmissions(@Param('id') id: string, @CurrentUser() user: RequestUser) {
    return this.homeworkService.listSubmissions(id, user.userId, user.roles);
  }

  @Patch('submissions/:id/grade')
  @Roles(Role.TEACHER, Role.CONTENT_MANAGER, Role.ADMIN)
  grade(@Param('id') id: string, @CurrentUser() user: RequestUser, @Body() dto: GradeSubmissionDto) {
    return this.homeworkService.grade(id, user.userId, user.roles, dto);
  }
}
