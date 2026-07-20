import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Role } from '@prisma/client';

export class BroadcastDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  message: string;

  // When omitted, the broadcast goes to every active user.
  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
