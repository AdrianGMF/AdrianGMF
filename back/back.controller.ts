import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BackService } from './back.service';
import { CreateBackDto } from './dto/create-back.dto';
import { UpdateBackDto } from './dto/update-back.dto';

@Controller('back')
export class BackController {
  constructor(private readonly backService: BackService) {}

  @Post()
  create(@Body() createBackDto: CreateBackDto) {
    return this.backService.create(createBackDto);
  }

  @Get()
  findAll() {
    return this.backService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBackDto: UpdateBackDto) {
    return this.backService.update(+id, updateBackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backService.remove(+id);
  }
}
