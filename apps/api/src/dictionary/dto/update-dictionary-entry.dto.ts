import { IsArray, IsOptional, IsString } from 'class-validator';
import { CourseLevel } from '@prisma/client';

export class UpdateDictionaryEntryDto {
  @IsOptional()
  @IsString()
  hanzi?: string;

  @IsOptional()
  @IsString()
  pinyin?: string;

  @IsOptional()
  @IsString()
  meaning?: string;

  @IsOptional()
  hskLevel?: CourseLevel;

  @IsOptional()
  @IsString()
  radical?: string;

  @IsOptional()
  @IsString()
  audioUrl?: string;

  @IsOptional()
  @IsArray()
  synonyms?: string[];

  @IsOptional()
  @IsArray()
  antonyms?: string[];
}
