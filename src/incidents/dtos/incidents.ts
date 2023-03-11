import { IsString, IsNotEmpty, Length, IsUUID } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { User } from 'src/users/entities/user.entity';
import { IncidentsStatus } from '../entities/incidentsStatus.entity';
import { Resources } from 'src/resources/entities/resources.entity';

export class CreateIncidentResourceDto {

  @IsUUID()
  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  resource: Resources;

  @IsUUID()
  @IsNotEmpty()
  incidentStatus: IncidentsStatus;

  @IsString()
  @Length(1, 300)
  @IsNotEmpty()
  description: string;

}

export class UpdateIncidentDto extends PartialType(CreateIncidentResourceDto) {}
