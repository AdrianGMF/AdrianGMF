import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { CreateChestDto } from "../dto/create-chest.dto";

@Entity() 
export class Chest {
    constructor(createChestDTO: CreateChestDto){
        this.muscle = createChestDTO.muscle
        this.description = createChestDTO.description
        this.equipment = createChestDTO.equipment
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
