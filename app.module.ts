import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ArmsModule } from './arms/arms.module';
import { LegsModule } from './legs/legs.module';
import { BackModule } from './back/back.module';
import { ChestModule } from './chest/chest.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [MikroOrmModule.forRoot(), ArmsModule, LegsModule, BackModule, ChestModule, UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
