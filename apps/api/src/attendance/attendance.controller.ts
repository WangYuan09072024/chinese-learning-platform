import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { SaveAttendanceDto } from './dto/save-attendance.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@Controller()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.TEACHER, Role.TEACHING_ASSISTANT, Role.CONTENT_MANAGER, Role.ADMIN)
export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  @Get('sessions/:id/attendance')
  roster(@Param('id') id: string, @CurrentUser() user: RequestUser) {
    return this.attendanceService.getRoster(id, user.userId, user.roles);
  }

  @Post('sessions/:id/attendance')
  save(@Param('id') id: string, @CurrentUser() user: RequestUser, @Body() dto: SaveAttendanceDto) {
    return this.attendanceService.save(id, user.userId, user.roles, dto);
  }
}
