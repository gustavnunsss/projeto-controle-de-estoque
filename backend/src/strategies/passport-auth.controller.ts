// /* eslint-disable @typescript-eslint/no-unsafe-argument */
// import {
//   Controller,
//   HttpCode,
//   HttpStatus,
//   Get,
//   NotImplementedException,
//   Post,
//   UseGuards,
// } from '@nestjs/common';

// import { AuthService } from 'src/auth/auth.service';
// import { PassportLocalGuard } from 'src/auth/guard/passport-local.guard';
// import { Request } from '@nestjs/common';

// @Controller('auth')
// export class PassportController {
//   constructor(private authService: AuthService) {}

//   @HttpCode(HttpStatus.OK)
//   @Post('Login')
//   @UseGuards(PassportLocalGuard)
//   login(@Request() request: Request & { user: any }) {
//     return this.authService.signIn(request.user);
//   }

//   @Get('me')
//   getUserInfo() {
//     throw new NotImplementedException();
//   }
// }
