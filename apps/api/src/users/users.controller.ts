import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/decorators/current-user.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('me')
  getMe(@CurrentUser() user: RequestUser) {
    return this.usersService.getProfile(user.userId);
  }

  @Patch('me')
  updateMe(@CurrentUser() user: RequestUser, @Body() dto: UpdateProfileDto) {
    return this.usersService.updateProfile(user.userId, dto);
  }
}
