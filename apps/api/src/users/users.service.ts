import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
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

  async changePassword(userId: string, currentPassword: string, newPassword: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const matches = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!matches) throw new BadRequestException('Mật khẩu hiện tại không đúng');

    const passwordHash = await bcrypt.hash(newPassword, 10);
    await this.prisma.user.update({ where: { id: userId }, data: { passwordHash } });
    return { changed: true };
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

  listAll(query?: string) {
    return this.prisma.user.findMany({
      where: query
        ? { OR: [{ email: { contains: query, mode: 'insensitive' } }, { name: { contains: query, mode: 'insensitive' } }] }
        : undefined,
      select: PUBLIC_PROFILE_SELECT,
      orderBy: { createdAt: 'desc' },
    });
  }

  // Admin can change roles, with guardrails: a plain Admin cannot touch a
  // Super Admin, nor grant/revoke the Super Admin role. Only a Super Admin
  // can manage Super Admins. (Per Permission_Matrix.md.)
  async updateRoles(targetUserId: string, requesterId: string, requesterRoles: string[], roles: Role[]) {
    const target = await this.prisma.user.findUnique({ where: { id: targetUserId } });
    if (!target) throw new NotFoundException('User not found');

    const requesterIsSuperAdmin = requesterRoles.includes(Role.SUPER_ADMIN);

    if (!requesterIsSuperAdmin) {
      if (target.roles.includes(Role.SUPER_ADMIN)) {
        throw new ForbiddenException('Only a Super Admin can modify a Super Admin');
      }
      if (roles.includes(Role.SUPER_ADMIN)) {
        throw new ForbiddenException('Only a Super Admin can grant the Super Admin role');
      }
    }

    const adminRoles: Role[] = [Role.ADMIN, Role.SUPER_ADMIN];
    if (target.id === requesterId && !roles.some((r) => adminRoles.includes(r))) {
      throw new BadRequestException('You cannot remove your own admin access');
    }

    return this.prisma.user.update({
      where: { id: targetUserId },
      data: { roles },
      select: PUBLIC_PROFILE_SELECT,
    });
  }
}
