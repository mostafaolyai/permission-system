import { Field, ObjectType } from '@nestjs/graphql';
import { TweetDto } from './tweet.dto';

@ObjectType('PaginatedTweet')
export class PaginatedTweetDto {
  @Field(() => [TweetDto])
  nodes: TweetDto[];

  @Field(() => Boolean)
  hasNextPage: boolean;
}
