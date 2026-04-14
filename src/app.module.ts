import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { LinkModule } from './modules/link/link.module';
import { AppController } from './app.controller';

@Module({
  imports: [LinkModule, PrismaModule],
})
export class AppModule {}
