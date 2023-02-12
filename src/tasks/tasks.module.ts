import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UsersModule } from './../users/users.module';
import { TasksController } from './tasks.controller';
import { Tasks } from './tasks.entity';
import { TasksService } from './tasks.service';

@Module({
  imports:[
    MikroOrmModule.forFeature([
      Tasks
    ]),
    UsersModule
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
