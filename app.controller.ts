import { Controller, Get, Param, Query, Post, Body} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiSecurity } from '@nestjs/swagger';

@ApiSecurity('873c853a-e34b-4da4-8853-f20e47ae1426')
@Controller({path: 'entities'})
export class AppController {
  constructor(private readonly appService: AppService) {}
}
