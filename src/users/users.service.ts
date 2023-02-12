import { EntityRepository, ObjectId } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';
import { Users } from './users.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private readonly usersRepo : EntityRepository<Users>){}

    /**
     * function to get all the users stored in the database (only users !deleted)
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

    /**
     * function to find a User by Id
     * 
     * @param idUser id of the user
     * @returns the user if exist
     */
    async getUserById( idUser : string ) : Promise<Users>{
        try {
            const user = await this.usersRepo.findOne({ _id : new ObjectId(idUser), deleted : false });

            if(!user){
                throw new Error('User not found');
            }

            return user;
            
        } catch (error) {
            throw new NotFoundException();
        }
    }

    /**
     * function to find a User by Email
     * 
     * @param idUser id of the user
     * @returns the user if exist
     */
    async getUserByEmail( email : string ) : Promise<Users>{
        try {
            const user = await this.usersRepo.findOne({ email , deleted : false });
       
            return user;
            
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }


    /**
     * function to create a new user and stored in db
     * 
     * @param user 
     * @returns a user after stored in DB
     */

    async createUser( user : CreateUserDto ) : Promise<Users> {
        try {
            const newUser = this.usersRepo.create( user );
            await this.usersRepo.persistAndFlush( newUser );
            return newUser;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    /**
     * function to update a user
     * 
     * @param idUser id of the user 
     * @param userData data to be updated
     * @returns user
     */
    async updateUser( idUser : string, userData : UpdateUserDto ) : Promise<Users> {
        try {
            const user = await this.usersRepo.findOne({ _id : new ObjectId(idUser), deleted : false });

            if( !user ){
                throw new Error(`User with id ${idUser} not found`);
            }

            Object.assign( user, userData );
            await this.usersRepo.persistAndFlush(user);

            return user;
        } catch (error) {
            throw new NotFoundException();
        }
    }

    /**
     * function to soft delete a user from te db
     * 
     * @param idUser id of the user
     * @returns user deleted
     */
    async deleteUser( idUser : string ) : Promise<Users>{
        try {
            const user = await this.usersRepo.findOne({ _id : new ObjectId(idUser), deleted : false });
            
            if( !user ){
                throw new Error(`User with id ${idUser} not found`);
            }

            user.deleted = true;
            await this.usersRepo.persistAndFlush( user );

            return user;
        } catch (error) {
            throw new NotFoundException();
        }
    }

}
