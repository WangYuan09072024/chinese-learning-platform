import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { FlashcardDecksService } from './flashcard-decks.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { AddCardDto } from './dto/add-card.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('flashcard-decks')
export class FlashcardDecksController {
  constructor(private decksService: FlashcardDecksService) {}

  // Public: any visitor/student can browse and study decks
  @Get()
  list() {
    return this.decksService.listDecks();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.decksService.getDeck(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.CONTENT_MANAGER, Role.ADMIN)
  createDeck(@Body() dto: CreateDeckDto) {
    return this.decksService.createDeck(dto);
  }

  @Post(':id/cards')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.CONTENT_MANAGER, Role.ADMIN)
  addCard(@Param('id') id: string, @Body() dto: AddCardDto) {
    return this.decksService.addCard(id, dto);
  }

  @Delete('cards/:cardId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.CONTENT_MANAGER, Role.ADMIN)
  removeCard(@Param('cardId') cardId: string) {
    return this.decksService.removeCard(cardId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.CONTENT_MANAGER, Role.ADMIN)
  removeDeck(@Param('id') id: string) {
    return this.decksService.removeDeck(id);
  }
}
