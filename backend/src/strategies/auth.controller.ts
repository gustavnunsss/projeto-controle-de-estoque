/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('Login')
  login(@Body() input: { username: string; password: string }) {
    return this.authService.authenticate(input);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Request() request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return request.users;
  }
}
