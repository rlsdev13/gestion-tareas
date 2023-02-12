import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor( private readonly usersService : UsersService){}

    @Get()
    async getAllUsers(@Query('limit') limit : string, @Query('offset') offset : string){
        return await this.usersService.getAllUsers(Number(limit),Number(offset));
    }

}
