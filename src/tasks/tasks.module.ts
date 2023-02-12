import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { Tasks } from './tasks.entity';
import { TasksService } from './tasks.service';

@Module({
  imports:[
    MikroOrmModule.forFeature([
      Tasks
    ]),
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
