import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from 'src/users/users.module';
import { JWT_SECRET } from 'src/auth/configs/jwt-secrets';
import { PassportController } from './passport-auth.controller';
import { LocalStrategy } from './locaL.strategy';

@Module({
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController, PassportController],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule,
  ],
})
export class AuthModule {}
