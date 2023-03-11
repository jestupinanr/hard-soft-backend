import { IsString, IsNotEmpty, Length, } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateIncidentStatusResourceDto {

  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  readonly name: string;

}

export class UpdateIncidentStatusDto extends PartialType(CreateIncidentStatusResourceDto) {}
