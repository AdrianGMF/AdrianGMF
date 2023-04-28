import { Module } from '@nestjs/common';
import { BackService } from './back.service';
import { BackController } from './back.controller';

@Module({
  controllers: [BackController],
  providers: [BackService]
})
export class BackModule {}
