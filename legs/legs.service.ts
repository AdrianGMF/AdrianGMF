import { Injectable } from '@nestjs/common';
import { CreateLegDto } from './dto/create-leg.dto';
import { UpdateLegDto } from './dto/update-leg.dto';
import { EntityManager } from '@mikro-orm/mysql';
import { Leg } from './entities/leg.entity';
import { Loaded } from '@mikro-orm/core';

@Injectable()
export class LegsService {
  
  async create(createLegDto: CreateLegDto): Promise<Leg> {
    const leg = new Leg(createLegDto)

    await this.em.persistAndFlush(leg)

    return leg
  }
  constructor(
    private readonly em: EntityManager,
  ) {}

  async findAll(): Promise<Loaded<Leg[]>> {
    return this.em.find(Leg, {});


  }

  async findOne(id: number) {
    return this.em.findOne(Leg,{id});

  }

  update(id: number, updateLegDto: UpdateLegDto) {
   return ""
  }

  async remove(id: number) {
    return this.em.nativeDelete(Leg, {id});
  }
}
