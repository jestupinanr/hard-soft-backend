import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService ) {}

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  // @Get(':id')
  // get(@Param('id', ParseIntPipe) id: number) {
  //   return this.usersService.findOne(id);
  // }

  @Post('login')
  login(@Body() payload: LoginDto) {
    return this.authService.login(payload);
  }

  // @Put(':id')
  // update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() payload: UpdateUserDto,
  // ) {
  //   return this.usersService.update(id, payload);
  // }

  // @Delete(':id')
  // remove(@Param('id', ParseIntPipe) id: number) {
  //   return this.usersService.remove(+id);
  // }
}
