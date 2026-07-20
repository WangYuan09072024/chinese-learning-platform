import { Module } from '@nestjs/common';
import { FlashcardDecksService } from './flashcard-decks.service';
import { FlashcardDecksController } from './flashcard-decks.controller';

@Module({
  controllers: [FlashcardDecksController],
  providers: [FlashcardDecksService],
})
export class FlashcardDecksModule {}
