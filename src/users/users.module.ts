import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Module({
  imports: [
    MikroOrmModule.forFeature([
      Users
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
