import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor( private readonly usersService : UsersService){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllUsers(@Query('limit') limit : string, @Query('offset') offset : string){
        return await this.usersService.getAllUsers(Number(limit),Number(offset));
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getUserById( @Param('id') id : string ){
        return await this.usersService.getUserById(id);
    }

    @Post()
    async createUser( @Body() userData : CreateUserDto ){
        return await this.usersService.createUser( userData );
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async updateUser( @Param('id') id : string, @Body() userData : UpdateUserDto ){
        return await this.usersService.updateUser( id, userData );
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deleteUser( @Param('id') id : string ){
        return await this.usersService.deleteUser(id);
    }

}
