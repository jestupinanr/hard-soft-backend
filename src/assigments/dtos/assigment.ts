import { IsString, IsNotEmpty, Length, IsUUID, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { User } from 'src/users/entities/user.entity';
import { Resources } from 'src/resources/entities/resources.entity';

export class CreateAssigmentDto {

  @IsUUID()
  @IsNotEmpty()
  readonly user: User;

  @IsUUID()
  @IsNotEmpty()
  readonly resource: Resources;

  @IsString()
  @Length(1, 300)
  @IsNotEmpty()
  readonly description: string;

  @IsOptional()
  readonly returnDate: string;
}

export class UpdateAssigmentDto extends PartialType(CreateAssigmentDto) {}
