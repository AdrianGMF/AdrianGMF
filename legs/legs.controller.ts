import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LegsService } from './legs.service';
import { CreateLegDto } from './dto/create-leg.dto';
import { UpdateLegDto } from './dto/update-leg.dto';

@Controller('legs')
export class LegsController {
  constructor(private readonly legsService: LegsService) {}

  @Post()
  create(@Body() createLegDto: CreateLegDto) {
    return this.legsService.create(createLegDto);
  }

  @Get()
  findAll() {
    return this.legsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLegDto: UpdateLegDto) {
    return this.legsService.update(+id, updateLegDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.legsService.remove(+id);
  }
}
