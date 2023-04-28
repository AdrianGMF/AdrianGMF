import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { CreateLegDto } from "../dto/create-leg.dto";

@Entity() 
export class Leg {
    constructor(createLegDTO: CreateLegDto){
        this.muscle = createLegDTO.muscle
        this.description = createLegDTO.description
        this.equipment = createLegDTO.equipment
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
