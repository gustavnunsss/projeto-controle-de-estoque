import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from '../dtos/constantes';

interface JwtPayload {
  sub: number;
  username: string;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    // Pega o header correto
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Token não enviado');
    }

    // "Bearer token_aqui"
    const [, token] = authHeader.split(' ');

    if (!token) {
      throw new UnauthorizedException('Token mal formatado');
    }

    try {
      // Valida token
      const tokenPayload = await this.jwtService.verifyAsync<JwtPayload>(
        token,
        {
          secret: jwtConstants.secret,
        },
      );

      // Injeta usuário na request
      request.user = {
        userId: tokenPayload.sub,
        username: tokenPayload.username,
      };

      return true;
    } catch {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
