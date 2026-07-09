import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { SubmitAttemptDto } from './dto/submit-attempt.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@Controller()
@UseGuards(JwtAuthGuard, RolesGuard)
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Post('lessons/:lessonId/quiz')
  @Roles(Role.CONTENT_MANAGER, Role.ADMIN)
  create(@Param('lessonId') lessonId: string, @CurrentUser() user: RequestUser, @Body() dto: CreateQuizDto) {
    return this.quizService.createForLesson(lessonId, user.userId, user.roles, dto);
  }

  @Get('quiz/:id')
  findOne(@Param('id') id: string, @CurrentUser() user: RequestUser) {
    return this.quizService.findByIdForUser(id, user.userId, user.roles);
  }

  @Post('quiz/:id/attempt')
  attempt(@Param('id') id: string, @CurrentUser() user: RequestUser, @Body() dto: SubmitAttemptDto) {
    return this.quizService.attempt(id, user.userId, dto);
  }

  @Get('quiz/:id/attempts')
  @Roles(Role.TEACHER, Role.TEACHING_ASSISTANT, Role.CONTENT_MANAGER, Role.ADMIN)
  listAttempts(@Param('id') id: string, @CurrentUser() user: RequestUser) {
    return this.quizService.listAttempts(id, user.userId, user.roles);
  }
}
