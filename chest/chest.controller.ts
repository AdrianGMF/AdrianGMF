import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChestService } from './chest.service';
import { CreateChestDto } from './dto/create-chest.dto';
import { UpdateChestDto } from './dto/update-chest.dto';

@Controller('chest')
export class ChestController {
  constructor(private readonly chestService: ChestService) {}

  @Post()
  create(@Body() createChestDto: CreateChestDto) {
    return this.chestService.create(createChestDto);
  }

  @Get()
  findAll() {
    return this.chestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChestDto: UpdateChestDto) {
    return this.chestService.update(+id, updateChestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chestService.remove(+id);
  }
}
