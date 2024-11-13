import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { TweetCategory } from '../../../enums/tweet-category.enum';
import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateTweet')
export class CreateTweetDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  authorId: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  content: string;

  @IsArray()
  @IsString({ each: true })
  @Field(() => [String], { nullable: true })
  hashtags: string[];

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
