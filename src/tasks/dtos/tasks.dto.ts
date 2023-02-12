import { IsString, IsArray, IsNotEmpty, IsBoolean, IsOptional, IsDateString } from 'class-validator';

export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    title : string;

    @IsString()
    @IsNotEmpty()
    description : string;

    @IsBoolean()
    @IsNotEmpty()
    status : boolean; //Completed = true

    @IsDateString()
    @IsNotEmpty()
    deadline : Date;

    @IsOptional()
    @IsString()
    comments : string;

    @IsOptional()
    @IsArray()
    tags : string[];
}


export class UpdateTaskDto{
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    title : string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    description : string;

    @IsBoolean()
    @IsOptional()
    @IsNotEmpty()
    status : boolean; //Completed = true

    @IsDateString()
    @IsOptional()
    @IsNotEmpty()
    deadline : Date;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    comments : string;

    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    tags : string[];
}