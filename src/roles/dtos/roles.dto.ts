import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRolDto {
  
  @IsString()
  @IsNotEmpty()
  readonly name: string;

}

export class UpdateRolDto extends PartialType(CreateRolDto) {}
