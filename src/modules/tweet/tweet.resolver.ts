import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dtos/create-tweet.dto';
import { TweetDto } from './dtos/tweet.dto';
import { PaginatedTweetDto } from './dtos/paginated-tweet.dto';
import { PaginatedTweetInputDto } from './dtos/paginated-tweet-input.dto';

@Resolver(TweetDto)
export class TweetResolver {
  constructor(private readonly tweetService: TweetService) {}

  @Mutation(() => TweetDto)
  async createTweet(@Args('input') args: CreateTweetDto): Promise<TweetDto> {
    return this.tweetService.createTweet(args);
  }

  @Query(() => PaginatedTweetDto)
  async paginatedTweet(
    @Args('input') args: PaginatedTweetInputDto,
  ): Promise<PaginatedTweetDto> {
    return this.tweetService.paginatedTweet(args);
  }
}
