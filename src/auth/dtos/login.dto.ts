import { IsEmail, IsString, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class LoginDto{
    @IsNotEmpty()
    @IsEmail()
    email : string;

    @IsNotEmpty()
    @IsString()
    // @IsStrongPassword()
    password : string;
}