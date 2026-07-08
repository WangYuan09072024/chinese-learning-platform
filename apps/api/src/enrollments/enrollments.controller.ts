import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { EnrollDto } from './dto/enroll.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@Controller()
@UseGuards(JwtAuthGuard, RolesGuard)
export class EnrollmentsController {
  constructor(private enrollmentsService: EnrollmentsService) {}

  @Post('courses/:courseId/enroll')
  @Roles(Role.TEACHER, Role.CONTENT_MANAGER, Role.ADMIN)
  enroll(@Param('courseId') courseId: string, @CurrentUser() user: RequestUser, @Body() dto: EnrollDto) {
    return this.enrollmentsService.enroll(courseId, user.userId, user.roles, dto);
  }

  @Get('courses/:courseId/students')
  @Roles(Role.TEACHER, Role.CONTENT_MANAGER, Role.ADMIN)
  listStudents(@Param('courseId') courseId: string, @CurrentUser() user: RequestUser) {
    return this.enrollmentsService.listStudents(courseId, user.userId, user.roles);
  }

  @Get('enrollments/me')
  listMine(@CurrentUser() user: RequestUser) {
    return this.enrollmentsService.listMine(user.userId);
  }
}
