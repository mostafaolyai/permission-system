import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TweetCategory } from '../../../enums/tweet-category.enum';
import { Field, InputType } from '@nestjs/graphql';

@InputType('FilterTweet')
export class FilterTweetDto {
  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  content: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  hashtags: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  parentTweetId: string;

  @IsEnum(TweetCategory)
  @IsOptional()
  @Field(() => TweetCategory, { nullable: true })
  category: TweetCategory;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  location: string;
}
