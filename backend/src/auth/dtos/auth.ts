import { IsEmail, IsEmpty, IsNotEmpty } from 'class-validator';

export class SignupDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEmpty()
  password: string;
}

export class SignInDTO {
  @IsEmail()
  email: string;

  @IsEmpty()
  password: string;
}
