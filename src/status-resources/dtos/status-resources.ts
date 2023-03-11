import { IsString, IsNotEmpty, Length, } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateStatusResourceDto {

  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  readonly name: string;

}

export class UpdateUserDto extends PartialType(CreateStatusResourceDto) {}
