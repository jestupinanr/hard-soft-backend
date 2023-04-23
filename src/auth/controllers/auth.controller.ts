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
import { LoginDto, getTokenRecoveryPassword, recoveryPassword } from '../dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService ) {}

  @Get()
  findAll() {
    return this.authService.findAll();
  }


  @Post('login')
  login(@Body() payload: LoginDto) {
    return this.authService.login(payload);
  }

  @Post('recovery/get-token')
  getTokenRecovery(@Body() payload: getTokenRecoveryPassword) {
    return this.authService.getTokenRecoveryPassword(payload);
  }

  @Post('recovery/:token')
  savePassword(@Param('token') token: string, @Body() payload: getTokenRecoveryPassword) {
    return this.authService.savePassword(payload, token);
  }

}
