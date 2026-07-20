import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class AddCardDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  hanzi: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  pinyin: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  meaning: string;
}
