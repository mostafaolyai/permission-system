import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Permission {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  tweetId: string;

  @Column({ default: false })
  inheritViewPermissions: boolean;

  @Column({ default: false })
  inheritEditPermissions: boolean;

  @Column('array')
  viewPermissions: string[];

  @Column('array')
  editPermissions: string[];
}
