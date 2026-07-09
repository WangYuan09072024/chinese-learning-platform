import { IsEmail } from 'class-validator';

export class AssignTeacherDto {
  @IsEmail()
  email: string;
}
