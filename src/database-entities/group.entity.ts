import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column('array')
  userIds: string[];

  @Column('array')
  groupIds: string[];
}
