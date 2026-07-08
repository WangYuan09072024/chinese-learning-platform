import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateHomeworkDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  dueDate?: string;
}
