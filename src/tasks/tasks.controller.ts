import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateTaskDto } from './dtos/tasks.dto';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService : TasksService ){}

    @Post()
    @UseGuards(JwtAuthGuard)
    async createTask(@Body() dataTask : CreateTaskDto, @Request() req ){
        return await this.taskService.createTask(dataTask, req.user._id)
    }
}
