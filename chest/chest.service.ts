import { Injectable } from '@nestjs/common';
import { CreateChestDto } from './dto/create-chest.dto';
import { UpdateChestDto } from './dto/update-chest.dto';
import { EntityManager } from '@mikro-orm/mysql';
import { Chest } from './entities/chest.entity';
import { Loaded } from '@mikro-orm/core';

@Injectable()
export class ChestService {
  
  async create(createChestDto: CreateChestDto): Promise<Chest> {
    const chest = new Chest(createChestDto)

    await this.em.persistAndFlush(chest)

    return chest
  }
  constructor(
    private readonly em: EntityManager,
  ) {}

  async findAll(): Promise<Loaded<Chest[]>> {
    return this.em.find(Chest, {});


  }

  async findOne(id: number) {
    return this.em.findOne(Chest,{id});

  }

  update(id: number, updateChestDto: UpdateChestDto) {
   return ""
  }

  async remove(id: number) {
    return this.em.nativeDelete(Chest, {id});
  }
}
