import { Body, Controller, Get, Post, Query, Request, UseGuards } from '@nestjs/common';
import { CreateTaskDto } from './dtos/tasks.dto';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { TasksService } from './tasks.service';
import { JwtStrategy } from 'src/auth/jwt/jwt.strategy';

@Controller('tasks')
@UseGuards(JwtStrategy)
export class TasksController {

    constructor(private readonly taskService : TasksService ){}

    @Get()
    async getAllTasks(@Query('limit') limit : string, @Query('offset') offset : string){
        return await this.taskService.getAllTasks(Number(limit),Number(offset));
    }
    

    @Post()
    async createTask(@Body() dataTask : CreateTaskDto, @Request() req ){
        return await this.taskService.createTask(dataTask, req.user._id)
    }
}
