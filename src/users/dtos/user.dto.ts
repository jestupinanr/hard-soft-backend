import { IsString, IsNotEmpty, IsEmail, Length, IsDate, IsDateString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Roles } from 'src/roles/entities/role.entity';

export class CreateUserDto {
  
  @IsString()
  @Length(1, 25)
  @IsNotEmpty()
  readonly nit: string;

  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly password: string;

  @IsNotEmpty()
  readonly role: Roles;

  @IsNotEmpty()
  @IsString()
  @Length(0, 30)
  readonly phone1: string;

  readonly phone2: string;

  @IsNotEmpty()
  @IsString()
  readonly address: string;

  @IsNotEmpty()
  @IsString()
  @IsDateString()
  readonly bornDate: string;

}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
