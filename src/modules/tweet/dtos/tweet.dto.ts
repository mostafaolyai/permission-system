import { Field, ObjectType } from '@nestjs/graphql';
import { TweetCategory } from '../../../enums/tweet-category.enum';
import { ObjectId } from 'typeorm';

@ObjectType('Tweet')
export class TweetDto {
  @Field(() => String, { name: 'id' })
  _id: ObjectId;

  @Field(() => String)
  authorId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => String)
  content: string;

  @Field(() => [String], { nullable: true })
  hashtags: string[];

  @Field(() => String, { nullable: true })
  parentTweetId: string;

  @Field(() => TweetCategory, { nullable: true })
  category: TweetCategory;

  @Field(() => String, { nullable: true })
  location: string;
}
