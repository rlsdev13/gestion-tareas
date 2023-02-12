import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor( private readonly usersService : UsersService){}

    @Get()
    async getAllUsers(@Query('limit') limit : string, @Query('offset') offset : string){
        return await this.usersService.getAllUsers(Number(limit),Number(offset));
    }

    @Post()
    async createUser( @Body() userData : CreateUserDto ){
        return await this.usersService.createUser( userData );
    }

}
