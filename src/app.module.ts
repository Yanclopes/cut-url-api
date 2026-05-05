import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { LinkModule } from './modules/link/link.module';
import {PingModule} from "./modules/ping/ping.module";

@Module({
  imports: [LinkModule, PrismaModule, PingModule],
})
export class AppModule {}
