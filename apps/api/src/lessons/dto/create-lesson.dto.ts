import { IsBoolean, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateLessonDto {
  @IsString()
  title: string;

  @IsInt()
  @Min(0)
  order: number;

  @IsOptional()
  @IsString()
  videoUrl?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsBoolean()
  isFreePreview?: boolean;
}
