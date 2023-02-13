import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JWTPayload } from './../interfaces/jwt.interface';
import { UserResponse } from './../interfaces/user.interface';
import { UsersService } from './../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor( private usersService : UsersService ){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : process.env.JWT_SECRET,
        });
    }

    async validate( payload : JWTPayload ) : Promise<UserResponse>{
        const { userId  } = payload;
        const user = await this.usersService.getUserById(userId);
        if( !user ){
            throw new UnauthorizedException();
        }
        return user;
    }
}