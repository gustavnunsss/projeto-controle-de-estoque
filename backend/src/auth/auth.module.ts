import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { ProductModule } from 'src/prodcut/productt.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'jwtContants.secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, ProductModule],
})
export class AuthModule {}
