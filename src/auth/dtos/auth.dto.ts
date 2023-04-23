import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly password: string;
}

export class recoveryPassword {
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly password: string;
}

export class getTokenRecoveryPassword extends PartialType(recoveryPassword) {}
