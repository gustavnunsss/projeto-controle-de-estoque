import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SignInDTO } from './dtos/signin.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './guard/auth.guard';

import express from 'express';
import { Res } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body() body: SignInDTO,
    @Res({ passthrough: true }) res: express.Response,
  ) {
    const token = await this.authService.signin(body);

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'lax',
    });

    return { success: true };
  }

  @UseGuards(AuthGuard)
  @Get('me')
  me(@Request() request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return request.user;
  }
}
