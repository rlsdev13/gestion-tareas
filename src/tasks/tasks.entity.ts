import { Entity, ManyToOne, PrimaryKey, Property} from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Users } from 'src/users/users.entity';

@Entity()
export class Tasks{
    @PrimaryKey()
    _id : ObjectId;

    @Property()
    title : string;

    @Property()
    description : string;

    @Property()
    status : boolean;

    @Property()
    deadline : Date;

    @Property()
    comments : string;

    @ManyToOne( () => Users, { type : Users } )
    user : ObjectId;// responsible
    
    @Property()
    tags : string[];

    @Property()
    deleted : boolean = false;

    @Property({ type : 'Date' })
    createdAt : Date = new Date();

    @Property({ type : 'Date', onUpdate : () => new Date() })
    updatedAt : Date = new Date();
}