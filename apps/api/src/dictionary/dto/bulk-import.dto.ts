import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';

export class BulkEntryDto {
  @IsString()
  hanzi: string;

  @IsString()
  pinyin: string;

  @IsString()
  meaning: string;

  // Free-form on input; normalized to a CourseLevel enum (or dropped) in the service.
  @IsOptional()
  @IsString()
  hskLevel?: string;
}

export class BulkImportDto {
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => BulkEntryDto)
  entries: BulkEntryDto[];
}
