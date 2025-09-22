import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { LinkModule } from './modules/link/link.module';

@Module({
  imports: [LinkModule, PrismaModule],
})
export class AppModule {}
