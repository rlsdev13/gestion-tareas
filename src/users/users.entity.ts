import { BeforeCreate, Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import * as bcrypt from 'bcryptjs';

@Entity()
export class Users{
    @PrimaryKey()
    _id : ObjectId;

    @Property()
    name : string;

    @Property()
    lastName : string;

    @Property()
    email : string;

    @Property()
    password : string;

    @Property()
    createdAt : Date = new Date();

    @Property({ onUpdate : () => new Date() })
    updatedAt : Date = new Date();

    @Property({ default : false })
    deleted : boolean = false;

    @BeforeCreate()
    async hashPassword(){
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
    }
}