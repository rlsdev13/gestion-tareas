import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';
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

    @Put(':id')
    async updateUser( @Param('id') id : string, @Body() userData : UpdateUserDto ){
        return await this.usersService.updateUser( id, userData );
    }

    @Delete(':id')
    async deleteUser( @Param('id') id : string ){
        return await this.usersService.deleteUser(id);
    }

}
