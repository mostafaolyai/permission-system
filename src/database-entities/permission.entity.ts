import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: string;

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
