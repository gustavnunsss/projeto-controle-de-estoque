/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'my-local') {
  constructor(private authservice: AuthService) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authservice.validateUser({
      username,
      password,
    });

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
