import { ObjectId } from "@mikro-orm/mongodb";

export interface UserResponse {
    _id : ObjectId;
    name : string; 
    lastName : string;
    email : string;
}