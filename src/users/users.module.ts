import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MikroOrmModule.forFeature([
      
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
