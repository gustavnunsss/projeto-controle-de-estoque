import { Controller, HttpCode, HttpStatus, NotImplementedException, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @HttpCode(HttpStatus.OK)
    @Post('Login')
    login() {
        throw new NotImplementedException('This method is not implemented');
    }
}