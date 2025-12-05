import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  NotImplementedException,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { PassportLocalGuard } from 'src/auth/guard/passport-local.guard';
import { Req } from '@nestjs/common';

@Controller('auth')
export class PassportController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('Login')
  @UseGuards(PassportLocalGuard)
  login(@Req() request: Request & { user: any }) {
    return this.authService.signIn(request.user);
  }

  @Get('me')
  getUserInfo() {
    throw new NotImplementedException();
  }
}
