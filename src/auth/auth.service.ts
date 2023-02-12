import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserResponse } from './interfaces/user.interface';
import { JWTPayload } from './interfaces/jwt.interface';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService : UsersService,
        private jwtService : JwtService,
    ){}

    async validateUser( dataLogin : LoginDto ) : Promise<boolean> {
        const { email, password } = dataLogin;
        const user = await this.userService.getUserByEmail(email);

        if(!user){
            throw new UnauthorizedException();
        }

        return await user.validatePassword( password );
    }

    async generateAccessToken( dataEmail : string ) : Promise<{ access_token : string, user : UserResponse }>{
        const user = await this.userService.getUserByEmail( dataEmail );
        const { _id, name, lastName, email } = user;
        
        const payload : JWTPayload = { 
            userId : _id.toString(),
        };

        return{
            access_token : this.jwtService.sign( payload ),
            user : {
                _id,
                name,
                lastName,
                email
            }
        }
    }
}
