import { Controller, Get, UseGuards } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/decorators/current-user.decorator';

@Controller('calendar')
@UseGuards(JwtAuthGuard)
export class CalendarController {
  constructor(private calendarService: CalendarService) {}

  @Get('me')
  getMine(@CurrentUser() user: RequestUser) {
    return this.calendarService.getUpcomingForStudent(user.userId);
  }
}
