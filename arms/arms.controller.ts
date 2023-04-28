import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArmsService } from './arms.service';
import { CreateArmDto } from './dto/create-arm.dto';
import { UpdateArmDto } from './dto/update-arm.dto';
import { Loaded } from '@mikro-orm/core';
import { Arm } from './entities/arm.entity';

@Controller('arms')
export class ArmsController {
  constructor(private readonly armsService: ArmsService) {}

  @Post()
  create(@Body() createArmDto: CreateArmDto) {
    return this.armsService.create(createArmDto);
  }

  @Get()
  findAll(): Promise<Loaded<Arm[]>> {
    return this.armsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.armsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArmDto: UpdateArmDto) {
    return this.armsService.update(+id, updateArmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.armsService.remove(+id);
  }
}
