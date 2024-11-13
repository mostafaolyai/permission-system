import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Group {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column('array')
  userIds: string[];

  @Column('array')
  groupIds: string[];
}
