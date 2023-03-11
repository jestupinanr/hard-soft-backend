import { IsString, IsNotEmpty, Length, IsDateString, IsUUID, } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { StatusResources } from 'src/status-resources/entities/statusResources.entity';

export class CreateHardwareDto {

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
  readonly model: string;

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

export class UpdateHardwareDto extends PartialType(CreateHardwareDto) {}
