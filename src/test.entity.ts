import { Entity, ObjectIdColumn, Column, ObjectID } from 'typeorm';


@Entity('testmodel')
export class TestModel {
    @ObjectIdColumn()
    _id!: ObjectID;

    @Column()
    orderId!: string;

}

