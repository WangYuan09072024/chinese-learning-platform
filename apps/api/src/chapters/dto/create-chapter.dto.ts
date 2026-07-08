import { IsInt, IsString, Min } from 'class-validator';

export class CreateChapterDto {
  @IsString()
  title: string;

  @IsInt()
  @Min(0)
  order: number;
}
