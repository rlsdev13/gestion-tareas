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