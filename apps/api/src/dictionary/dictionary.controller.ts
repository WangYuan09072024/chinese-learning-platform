import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { CreateDictionaryEntryDto } from './dto/create-dictionary-entry.dto';
import { UpdateDictionaryEntryDto } from './dto/update-dictionary-entry.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('dictionary')
export class DictionaryController {
  constructor(private dictionaryService: DictionaryService) {}

  // Public: guests and students can look words up without an account
  @Get()
  search(@Query('q') q?: string) {
    return this.dictionaryService.search(q);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.CONTENT_MANAGER, Role.ADMIN)
  create(@Body() dto: CreateDictionaryEntryDto) {
    return this.dictionaryService.create(dto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.CONTENT_MANAGER, Role.ADMIN)
  update(@Param('id') id: string, @Body() dto: UpdateDictionaryEntryDto) {
    return this.dictionaryService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.CONTENT_MANAGER, Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.dictionaryService.remove(id);
  }
}
