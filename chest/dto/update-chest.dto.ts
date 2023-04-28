import { PartialType } from '@nestjs/mapped-types';
import { CreateChestDto } from './create-chest.dto';

export class UpdateChestDto extends PartialType(CreateChestDto) {}
