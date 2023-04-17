import { IsString, IsNotEmpty, Length, IsDateString, IsUUID, } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { StatusResources } from '../entities/status-resources.entity';
import { ResourceBrand } from '../entities/brand.entity';
import { ResourceType } from '../entities/type.entity';

export class CreateSoftwareDto {

  @IsString()
  @Length(1, 200)
  @IsNotEmpty()
  readonly name: string;

  @IsUUID()
  @Length(1, 50)
  @IsNotEmpty()
  readonly status: StatusResources;

  @IsUUID()
  @Length(1, 100)
  @IsNotEmpty()
  readonly brand: ResourceBrand;

  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  readonly licenseNumber: string;

  @IsUUID()
  @Length(1, 50)
  @IsNotEmpty()
  readonly type: ResourceType;

  @IsString()
  @Length(1, 300)
  @IsNotEmpty()
  readonly observations: string;

  @IsString()
  @IsNotEmpty()
  @IsDateString()
  readonly acquisitionDate: Date

  @IsString()
  @IsNotEmpty()
  @IsDateString()
  readonly renovationDate: Date

}

export class UpdateSoftwareDto extends PartialType(CreateSoftwareDto) {}
