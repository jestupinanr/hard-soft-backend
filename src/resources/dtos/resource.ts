import { PartialType } from '@nestjs/mapped-types';
import { Hardware } from '../entities/hardware/hardware.entity';
import { Software } from '../entities/software/software.entity';
import { IsOptional } from 'class-validator';

export class CreateResourceDto {

  hardware: Hardware;

  software: Software;

  @IsOptional()
  isAssigned:string

}

export class UpdateHardwareDto extends PartialType(CreateResourceDto) {}


