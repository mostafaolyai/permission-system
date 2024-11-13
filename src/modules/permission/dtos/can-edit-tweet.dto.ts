import { Field, InputType } from '@nestjs/graphql';

@InputType('CanEditTweet')
export class CanEditTweetDto {
  @Field(() => String)
  tweetId: string;

  @Field(() => String)
  userId: string;
}
