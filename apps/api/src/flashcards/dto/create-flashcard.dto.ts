import { IsOptional, IsString } from 'class-validator';

export class CreateFlashcardDto {
  @IsString()
  hanzi: string;

  @IsString()
  pinyin: string;

  @IsString()
  meaning: string;

  @IsOptional()
  @IsString()
  deckName?: string;
}
