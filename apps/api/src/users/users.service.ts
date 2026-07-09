import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
import { UpdateProfileDto } from './dto/update-profile.dto';

const PUBLIC_PROFILE_SELECT = {
  id: true,
  email: true,
  name: true,
  avatarUrl: true,
  phone: true,
  roles: true,
  createdAt: true,
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  getProfile(userId: string) {
    return this.prisma.user.findUnique({ where: { id: userId }, select: PUBLIC_PROFILE_SELECT });
  }

  updateProfile(userId: string, dto: UpdateProfileDto) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { name: dto.name, phone: dto.phone, avatarUrl: dto.avatarUrl },
      select: PUBLIC_PROFILE_SELECT,
    });
  }

  create(data: { email: string; passwordHash: string; name: string; roles?: Role[] }) {
    return this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash: data.passwordHash,
        name: data.name,
        roles: data.roles ?? [Role.STUDENT],
      },
    });
  }
}
