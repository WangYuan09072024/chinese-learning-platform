import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDictionaryEntryDto } from './dto/create-dictionary-entry.dto';

@Injectable()
export class DictionaryService {
  constructor(private prisma: PrismaService) {}

  search(query?: string) {
    if (!query) {
      return this.prisma.dictionaryEntry.findMany({ orderBy: { createdAt: 'desc' }, take: 50 });
    }
    return this.prisma.dictionaryEntry.findMany({
      where: {
        OR: [
          { hanzi: { contains: query } },
          { pinyin: { contains: query, mode: 'insensitive' } },
          { meaning: { contains: query, mode: 'insensitive' } },
        ],
      },
      take: 50,
    });
  }

  create(dto: CreateDictionaryEntryDto) {
    return this.prisma.dictionaryEntry.create({
      data: {
        hanzi: dto.hanzi,
        pinyin: dto.pinyin,
        meaning: dto.meaning,
        hskLevel: dto.hskLevel,
        radical: dto.radical,
        audioUrl: dto.audioUrl,
        synonyms: dto.synonyms ?? [],
        antonyms: dto.antonyms ?? [],
      },
    });
  }
}
