import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseLevel } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDictionaryEntryDto } from './dto/create-dictionary-entry.dto';
import { UpdateDictionaryEntryDto } from './dto/update-dictionary-entry.dto';
import { BulkEntryDto } from './dto/bulk-import.dto';

const HSK_LEVELS = new Set<string>(['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6']);

function normalizeLevel(raw?: string): CourseLevel | undefined {
  if (!raw) return undefined;
  let v = String(raw).trim().toUpperCase().replace(/\s+/g, '');
  if (/^[1-6]$/.test(v)) v = `HSK${v}`; // accept a bare "1".."6"
  return HSK_LEVELS.has(v) ? (v as CourseLevel) : undefined;
}

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

  async update(id: string, dto: UpdateDictionaryEntryDto) {
    const existing = await this.prisma.dictionaryEntry.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Dictionary entry not found');

    return this.prisma.dictionaryEntry.update({
      where: { id },
      data: {
        hanzi: dto.hanzi,
        pinyin: dto.pinyin,
        meaning: dto.meaning,
        hskLevel: dto.hskLevel,
        radical: dto.radical,
        audioUrl: dto.audioUrl,
        synonyms: dto.synonyms,
        antonyms: dto.antonyms,
      },
    });
  }

  async remove(id: string) {
    const existing = await this.prisma.dictionaryEntry.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Dictionary entry not found');
    await this.prisma.dictionaryEntry.delete({ where: { id } });
    return { deleted: true };
  }

  // Bulk import from an uploaded spreadsheet (parsed client-side). Rows missing
  // required fields are dropped; rows already present (same hanzi + meaning) are
  // skipped so re-uploading the same file doesn't create duplicates.
  async bulkCreate(entries: BulkEntryDto[]) {
    const clean = entries
      .map((e) => ({
        hanzi: String(e.hanzi ?? '').trim(),
        pinyin: String(e.pinyin ?? '').trim(),
        meaning: String(e.meaning ?? '').trim(),
        hskLevel: normalizeLevel(e.hskLevel),
      }))
      .filter((e) => e.hanzi && e.pinyin && e.meaning);

    const key = (e: { hanzi: string; meaning: string }) => `${e.hanzi}|||${e.meaning}`;

    // Dedupe within the file itself.
    const seen = new Set<string>();
    const unique = clean.filter((e) => (seen.has(key(e)) ? false : (seen.add(key(e)), true)));

    // Dedupe against what's already in the dictionary.
    const existing = await this.prisma.dictionaryEntry.findMany({ select: { hanzi: true, meaning: true } });
    const existingSet = new Set(existing.map(key));
    const toInsert = unique.filter((e) => !existingSet.has(key(e)));

    if (toInsert.length > 0) {
      await this.prisma.dictionaryEntry.createMany({
        data: toInsert.map((e) => ({
          hanzi: e.hanzi,
          pinyin: e.pinyin,
          meaning: e.meaning,
          hskLevel: e.hskLevel,
          synonyms: [],
          antonyms: [],
        })),
      });
    }

    return {
      received: entries.length,
      inserted: toInsert.length,
      skipped: entries.length - toInsert.length,
    };
  }
}
