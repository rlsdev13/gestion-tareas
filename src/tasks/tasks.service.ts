import { EntityRepository, ObjectId } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTaskDto } from './dtos/tasks.dto';
import { Tasks } from './tasks.entity';

@Injectable()
export class TasksService {

    constructor(@InjectRepository(Tasks) private readonly tasksRepo : EntityRepository<Tasks>){}

    async createTask( dataTask : CreateTaskDto, userId : ObjectId ) : Promise<Tasks>{
        try {
            const newTask = this.tasksRepo.create(dataTask);
            newTask.user =  userId;
            await this.tasksRepo.persistAndFlush( newTask );
            return newTask;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

}
