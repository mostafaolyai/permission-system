import { Injectable } from '@nestjs/common';
import { Tweet } from '../../database-entities/tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTweetDto } from './dtos/create-tweet.dto';
import { PaginatedTweetInputDto } from './dtos/paginated-tweet-input.dto';
import { PaginatedTweetDto } from './dtos/paginated-tweet.dto';

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}

  async createTweet(createTweetDto: CreateTweetDto): Promise<Tweet> {
    return this.tweetRepository.save(createTweetDto as Tweet);
  }

  async paginatedTweet(
    args: PaginatedTweetInputDto,
  ): Promise<PaginatedTweetDto> {
    const { authorId, limit, page, filters } = args;
    const [data, total] = await this.tweetRepository.findAndCount({
      where: { authorId, ...filters },
      take: limit,
      skip: limit * (page - 1),
      order: { createdAt: 'DESC' }, // Optional: order by created date, latest first
    });

    return { nodes: data, hasNextPage: total / limit > page };
  }
}
