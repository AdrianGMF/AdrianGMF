import { Injectable } from '@nestjs/common';
import { CreateArmDto } from './dto/create-arm.dto';
import { UpdateArmDto } from './dto/update-arm.dto';
import { EntityManager } from '@mikro-orm/mysql';
import { Arm } from './entities/arm.entity';
import { Loaded } from '@mikro-orm/core';

@Injectable()
export class ArmsService {
  
  async create(createArmDto: CreateArmDto): Promise<Arm> {
    const arm = new Arm(createArmDto)

    await this.em.persistAndFlush(arm)

    return arm
  }
  constructor(
    private readonly em: EntityManager,
  ) {}

  async findAll(): Promise<Loaded<Arm[]>> {
    return this.em.find(Arm, {});


  }

  async findOne(id: number) {
    return this.em.findOne(Arm,{id});

  }

  update(id: number, updateArmDto: UpdateArmDto) {
   return ""
  }

  async remove(id: number) {
    return this.em.nativeDelete(Arm, {id});
  }
}
