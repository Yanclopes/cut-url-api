import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('ping')
  healthCheck() {
    return { 
      status: 'ok', 
      message: 'ping',
      timestamp: new Date().toISOString()
    };
  }
}