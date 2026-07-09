import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';

@Injectable()
export class FlashcardsService {
  constructor(private prisma: PrismaService) {}

  listMine(ownerId: string) {
    return this.prisma.flashcard.findMany({ where: { ownerId }, orderBy: { createdAt: 'desc' } });
  }

  create(ownerId: string, dto: CreateFlashcardDto) {
    return this.prisma.flashcard.create({
      data: {
        ownerId,
        hanzi: dto.hanzi,
        pinyin: dto.pinyin,
        meaning: dto.meaning,
        deckName: dto.deckName ?? 'Default',
      },
    });
  }

  async remove(id: string, ownerId: string) {
    const card = await this.prisma.flashcard.findUnique({ where: { id } });
    if (!card) throw new NotFoundException('Flashcard not found');
    if (card.ownerId !== ownerId) throw new ForbiddenException('Not your flashcard');

    await this.prisma.flashcard.delete({ where: { id } });
    return { deleted: true };
  }
}
