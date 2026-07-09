import { IsEmail, IsString, MaxLength } from 'class-validator';

export class CreateContactMessageDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(2000)
  message: string;
}
