import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TweetCategory } from '../enums/tweet-category.enum';

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  authorId: string;

  @Column({ type: Date, default: new Date() })
  createdAt: Date;

  @Column()
  content: string;

  @Column()
  hashtags: string[];

  @Column()
  parentTweetId: string;

  @Column({ type: 'enum', enum: TweetCategory })
  category: TweetCategory;

  @Column()
  location: string;
}
