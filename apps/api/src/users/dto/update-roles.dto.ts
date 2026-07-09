import { ArrayMinSize, IsArray, IsEnum } from 'class-validator';
import { Role } from '@prisma/client';

export class UpdateRolesDto {
  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(Role, { each: true })
  roles: Role[];
}
