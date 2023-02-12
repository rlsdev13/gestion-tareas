import { IsString, IsEmail, IsNotEmpty, IsStrongPassword, IsOptional } from 'class-validator';

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

export class UpdateUserDto{
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name : string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    lastName : string;

    @IsOptional()
    @IsNotEmpty()
    @IsEmail()
    email : string;
}