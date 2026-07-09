import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  // Public: anyone can submit the contact form
  @Post()
  create(@Body() dto: CreateContactMessageDto) {
    return this.contactService.create(dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPER_ADMIN, Role.CUSTOMER_SUPPORT)
  list() {
    return this.contactService.list();
  }
}
