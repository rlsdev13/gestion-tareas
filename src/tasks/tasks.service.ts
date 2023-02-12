import { EntityRepository, ObjectId } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dtos/tasks.dto';
import { Tasks } from './tasks.entity';

@Injectable()
export class TasksService {

    constructor(@InjectRepository(Tasks) private readonly tasksRepo : EntityRepository<Tasks>){}

    /**
     * function to get all the tasks stored in the database (only tasks !deleted)
     * 
     * @param limit number of number of records to get 
     * @param offset since what record start
     * @returns an object with an tasks array and the total of tasks 
     */
    async getAllTasks( limit : number = 5, offset : number = 0) : Promise<{ tasks : Tasks[], total : number }>{
        try {
            const [ tasks , total ] = await Promise.all([
                this.tasksRepo.find({ deleted : false }, { limit, offset, fields : ['_id','title','description','deadline']}),
                this.tasksRepo.count({ deleted : false })
            ]);
            return {
                tasks,
                total
            } 
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    
    /**
     * function to create a new task and stored in db, the user is obtained 
     * through the previous validation of the jwt and passed through the request
     * 
     * @param dataTask data of the task
     * @param userId id of the user who creates the task
     * @returns new task if it was saved successfully
     */
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
