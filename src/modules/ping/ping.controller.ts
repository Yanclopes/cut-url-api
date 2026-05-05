import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ping')
@Controller('/')
export class PingController {
    @Get()
    ping() {
        return {
            status: 'ok',
            message: 'pong',
            timestamp: new Date().toISOString()
        };
    }
}