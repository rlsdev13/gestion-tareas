import { Body, Controller, Get, Param, Post, Query, Request, UseGuards } from '@nestjs/common';
import { CreateTaskDto } from './dtos/tasks.dto';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { TasksService } from './tasks.service';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {

    constructor(private readonly taskService : TasksService ){}

    @Get()
    async getAllTasks(@Query('limit') limit : string, @Query('offset') offset : string){
        return await this.taskService.getAllTasks(Number(limit),Number(offset));
    }
    
    @Get(':id')
    async getTaskById(@Param() id : string ){
        return await this.taskService.getTaskById(id);
    }

    @Post()
    async createTask(@Body() dataTask : CreateTaskDto, @Request() req ){
        return await this.taskService.createTask(dataTask, req.user._id)
    }
}
