import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { AddCardDto } from './dto/add-card.dto';

@Injectable()
export class FlashcardDecksService {
  constructor(private prisma: PrismaService) {}

  // Public list of decks with card counts (for browsing).
  async listDecks() {
    const decks = await this.prisma.flashcardDeck.findMany({
      orderBy: { createdAt: 'desc' },
      include: { _count: { select: { cards: true } } },
    });
    return decks.map((d) => ({
      id: d.id,
      topic: d.topic,
      description: d.description,
      level: d.level,
      cardCount: d._count.cards,
    }));
  }

  async getDeck(id: string) {
    const deck = await this.prisma.flashcardDeck.findUnique({
      where: { id },
      include: { cards: { orderBy: { order: 'asc' } } },
    });
    if (!deck) throw new NotFoundException('Deck not found');
    return deck;
  }

  createDeck(dto: CreateDeckDto) {
    return this.prisma.flashcardDeck.create({
      data: { topic: dto.topic, description: dto.description, level: dto.hskLevel },
    });
  }

  async addCard(deckId: string, dto: AddCardDto) {
    const deck = await this.prisma.flashcardDeck.findUnique({ where: { id: deckId } });
    if (!deck) throw new NotFoundException('Deck not found');
    const count = await this.prisma.flashcardCard.count({ where: { deckId } });
    return this.prisma.flashcardCard.create({
      data: { deckId, hanzi: dto.hanzi, pinyin: dto.pinyin, meaning: dto.meaning, order: count },
    });
  }

  async removeCard(cardId: string) {
    const card = await this.prisma.flashcardCard.findUnique({ where: { id: cardId } });
    if (!card) throw new NotFoundException('Card not found');
    await this.prisma.flashcardCard.delete({ where: { id: cardId } });
    return { deleted: true };
  }

  async removeDeck(id: string) {
    const deck = await this.prisma.flashcardDeck.findUnique({ where: { id } });
    if (!deck) throw new NotFoundException('Deck not found');
    await this.prisma.flashcardDeck.delete({ where: { id } });
    return { deleted: true };
  }
}
