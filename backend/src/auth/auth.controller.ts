import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { SignInDTO } from './dtos/signin.dto';
import { SignupDTO } from './dtos/signup.dto';
import { AuthGuard } from '@nestjs/passport';

interface JwtUser {
  sub: string;
  email: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signin(@Body() body: SignInDTO) {
    return this.authService.signin(body);
  }

  @Post('signup')
  async register(@Body() signupDto: SignupDTO) {
    return this.authService.signup(signupDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  me(@Req() request: Request & { user: JwtUser }) {
    return request.user;
  }
}
