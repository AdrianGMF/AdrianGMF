import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { CreateArmDto } from "../dto/create-arm.dto";

@Entity() 
export class Arm {
    constructor(createArmDTO: CreateArmDto){
        this.muscle = createArmDTO.muscle
        this.description = createArmDTO.description
        this.equipment = createArmDTO.description
    }
    @PrimaryKey({
        autoincrement: true,
    })
    id!: number

    @Property({
        length: 16
    })
    muscle!: string

    @Property({
        length: 32
    })
    equipment!: string

    @Property({
        length: 128
    })
    description!: string


}