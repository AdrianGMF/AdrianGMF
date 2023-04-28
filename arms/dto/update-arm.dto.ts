import { PartialType } from '@nestjs/mapped-types';
import { CreateArmDto } from './create-arm.dto';

export class UpdateArmDto extends PartialType(CreateArmDto) {
    muscle!: string
    description!: string
    equipment!: string
}
