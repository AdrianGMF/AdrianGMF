import { Module } from '@nestjs/common';
import { LegsService } from './legs.service';
import { LegsController } from './legs.controller';

@Module({
  controllers: [LegsController],
  providers: [LegsService]
})
export class LegsModule {}
