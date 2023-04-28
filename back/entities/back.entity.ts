import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { CreateBackDto } from "../dto/create-back.dto";

@Entity() 
export class Back {
    constructor(createBackDTO: CreateBackDto){
        this.muscle = createBackDTO.muscle
        this.description = createBackDTO.description
        this.equipment = createBackDTO.equipment
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
