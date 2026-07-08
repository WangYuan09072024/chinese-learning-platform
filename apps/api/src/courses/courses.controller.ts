import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
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

  @Get('mine')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TEACHER, Role.CONTENT_MANAGER, Role.ADMIN)
  findMine(@CurrentUser() user: RequestUser) {
    return this.coursesService.findMine(user.userId);
  }

  @Get(':slug')
  findBySlug(@Param('slug') slug: string) {
    return this.coursesService.findBySlug(slug);
  }

  // Per Permission_Matrix.md: Courses "Edit/Manage" -> Teacher, Content Manager, Admin, Super Admin
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TEACHER, Role.CONTENT_MANAGER, Role.ADMIN)
  create(@CurrentUser() user: RequestUser, @Body() dto: CreateCourseDto) {
    return this.coursesService.create(user.userId, dto);
  }
}
