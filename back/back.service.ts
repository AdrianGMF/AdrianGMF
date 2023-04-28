import { Injectable } from '@nestjs/common';
import { CreateBackDto } from './dto/create-back.dto';
import { UpdateBackDto } from './dto/update-back.dto';
import { EntityManager } from '@mikro-orm/mysql';
import { Back } from './entities/back.entity';
import { Loaded } from '@mikro-orm/core';

@Injectable()
export class BackService {
  
  async create(createBackDto: CreateBackDto): Promise<Back> {
    const back = new Back(createBackDto)

    await this.em.persistAndFlush(back)

    return back
  }
  constructor(
    private readonly em: EntityManager,
  ) {}

  async findAll(): Promise<Loaded<Back[]>> {
    return this.em.find(Back, {});


  }

  async findOne(id: number) {
    return this.em.findOne(Back,{id});

  }

  update(id: number, updateBackDto: UpdateBackDto) {
   return ""
  }

  async remove(id: number) {
    return this.em.nativeDelete(Back, {id});
  }
}
