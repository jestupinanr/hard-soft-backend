import { IsString, IsNotEmpty, Length, IsDateString, IsUUID, } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { StatusResources } from '../entities/status-resources.entity';

export class CreateSoftwareDto {

  @IsString()
  @Length(1, 200)
  @IsNotEmpty()
  readonly name: string;

  @IsUUID()
  @Length(1, 50)
  @IsNotEmpty()
  readonly status: StatusResources;

  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  readonly brand: string;

  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  readonly licenseNumber: string;

  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  @Length(1, 300)
  @IsNotEmpty()
  readonly observations: string;

  @IsString()
  @Length(1, 300)
  @IsNotEmpty()
  @IsDateString()
  readonly acquisitionDate: Date

}

export class UpdateSoftwareDto extends PartialType(CreateSoftwareDto) {}
