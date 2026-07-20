import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { CourseLevel } from '@prisma/client';

export class CreateDeckDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  topic: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  description?: string;

  @IsOptional()
  hskLevel?: CourseLevel;
}
