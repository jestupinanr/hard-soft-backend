import { IsString, IsNotEmpty, Length, IsUUID, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { IncidentsStatus } from '../entities/incidentsStatus.entity';
import { Assigment } from 'src/assigments/entities/assigment.entity';

export class CreateIncidentResourceDto {
  @IsString()
  @Length(1, 200)
  @IsNotEmpty()
  title: string;

  @IsUUID()
  @IsNotEmpty()
  assigment: Assigment;

  @IsUUID()
  @IsNotEmpty()
  incidentStatus: IncidentsStatus;

  @IsString()
  @Length(1, 300)
  @IsNotEmpty()
  description: string;

  @IsOptional()
  solution:string

}

export class UpdateIncidentDto extends PartialType(CreateIncidentResourceDto) {}
