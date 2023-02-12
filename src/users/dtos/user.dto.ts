import { IsString, IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    name : string;

    @IsNotEmpty()
    @IsString()
    lastName : string;

    @IsNotEmpty()
    @IsEmail()
    email : string;

    @IsNotEmpty()
    @IsString()
    // @IsStrongPassword()
    password : string;
}