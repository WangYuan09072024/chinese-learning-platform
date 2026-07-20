import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Lightweight liveness check (no DB access) for uptime pingers / keep-alive.
  @Get('health')
  health() {
    return { status: 'ok', time: new Date().toISOString() };
  }
}
