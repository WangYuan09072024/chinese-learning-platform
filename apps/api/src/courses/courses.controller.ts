import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { AssignTeacherDto } from './dto/assign-teacher.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  // Public: Guest and any authenticated role can view published courses
  @Get()
  findPublished() {
    return this.coursesService.findPublished();
  }

  // Staff see all courses (they manage everything); a Teacher sees only
  // courses they've been assigned to teach.
  @Get('manageable')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TEACHER, Role.TEACHING_ASSISTANT, Role.CONTENT_MANAGER, Role.ADMIN)
  findManageable(@CurrentUser() user: RequestUser) {
    return this.coursesService.findManageable(user.userId, user.roles);
  }

  @Get(':slug')
  findBySlug(@Param('slug') slug: string) {
    return this.coursesService.findBySlug(slug);
  }

  // Per updated model: only Admin/Content Manager build curriculum (courses).
  // Teachers are assigned to existing courses instead of authoring their own.
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.CONTENT_MANAGER, Role.ADMIN)
  create(@CurrentUser() user: RequestUser, @Body() dto: CreateCourseDto) {
    return this.coursesService.create(user.userId, dto);
  }

  @Post(':id/teachers')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.CONTENT_MANAGER, Role.ADMIN)
  assignTeacher(@Param('id') id: string, @Body() dto: AssignTeacherDto) {
    return this.coursesService.assignTeacher(id, dto);
  }

  @Get(':id/teachers')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.CONTENT_MANAGER, Role.ADMIN)
  listTeachers(@Param('id') id: string) {
    return this.coursesService.listTeachers(id);
  }
}
