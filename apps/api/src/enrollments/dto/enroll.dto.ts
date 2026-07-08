import { IsEmail } from 'class-validator';

export class EnrollDto {
  @IsEmail()
  email: string;
}
