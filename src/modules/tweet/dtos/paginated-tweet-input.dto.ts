import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { FilterTweetDto } from './filter-tweet.dto';

@InputType('PaginatedTweetInput')
export class PaginatedTweetInputDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  authorId: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => Number)
  limit: number;

  @IsString()
  @IsNotEmpty()
  @Field(() => Number)
  page: number;

  @Field(() => FilterTweetDto)
  filters: FilterTweetDto;
}
