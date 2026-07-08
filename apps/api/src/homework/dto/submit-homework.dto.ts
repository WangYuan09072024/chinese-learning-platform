import { IsOptional, IsString } from 'class-validator';

export class SubmitHomeworkDto {
  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  fileUrl?: string;
}
