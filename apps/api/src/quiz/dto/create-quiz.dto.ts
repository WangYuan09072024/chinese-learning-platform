import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsDefined, IsEnum, IsInt, IsOptional, IsString, Min, ValidateNested } from 'class-validator';
import { QuestionType } from '@prisma/client';

export class CreateQuizQuestionDto {
  @IsString()
  question: string;

  @IsEnum(QuestionType)
  type: QuestionType;

  @IsArray()
  options: string[];

  // Union type (string | string[]) has no single class-validator decorator;
  // @IsDefined is required so the global ValidationPipe's whitelist option
  // doesn't strip this field before it reaches the database.
  @IsDefined()
  correctAnswer: string | string[];

  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;
}

export class CreateQuizDto {
  @IsString()
  title: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateQuizQuestionDto)
  questions: CreateQuizQuestionDto[];
}
