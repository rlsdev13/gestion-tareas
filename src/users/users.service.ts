import { EntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Users } from './users.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private readonly usersRepo : EntityRepository<Users>){}

    /**
     * function for get all the users stored in the database (only users !deleted)
     * 
     * @param limit number of number of records to get 
     * @param offset since what record start
     * @returns an object with an users array and the total of users 
     */
    async getAllUsers( limit : number = 5, offset : number = 0) : Promise<{ users : Users[], total : number }> {
        try {
            const [ users, total ] = await Promise.all([
                this.usersRepo.find({ deleted : false }, { limit, offset }),
                this.usersRepo.count({ deleted : false})
            ]);

            return {
                users,
                total
            }

        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}
