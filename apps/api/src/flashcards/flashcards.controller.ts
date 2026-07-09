import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/decorators/current-user.decorator';

@Controller('flashcards')
@UseGuards(JwtAuthGuard)
export class FlashcardsController {
  constructor(private flashcardsService: FlashcardsService) {}

  @Get('me')
  listMine(@CurrentUser() user: RequestUser) {
    return this.flashcardsService.listMine(user.userId);
  }

  @Post()
  create(@CurrentUser() user: RequestUser, @Body() dto: CreateFlashcardDto) {
    return this.flashcardsService.create(user.userId, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: RequestUser) {
    return this.flashcardsService.remove(id, user.userId);
  }
}
