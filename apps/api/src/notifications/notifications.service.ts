import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationType } from '@prisma/client';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, type: NotificationType, title: string, message: string) {
    return this.prisma.notification.create({ data: { userId, type, title, message } });
  }

  createMany(userIds: string[], type: NotificationType, title: string, message: string) {
    if (userIds.length === 0) return Promise.resolve();
    return this.prisma.notification.createMany({
      data: userIds.map((userId) => ({ userId, type, title, message })),
    });
  }

  listMine(userId: string) {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }

  async markRead(id: string, userId: string) {
    const notification = await this.prisma.notification.findUnique({ where: { id } });
    if (!notification) throw new NotFoundException('Notification not found');
    if (notification.userId !== userId) throw new ForbiddenException('Not your notification');

    return this.prisma.notification.update({ where: { id }, data: { isRead: true } });
  }
}
