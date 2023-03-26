import { IsString, IsNotEmpty, Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateResourceBrandDto {

  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  readonly resource: string;

}

export class UpdateResorceBrandDto extends PartialType(CreateResourceBrandDto) {}

