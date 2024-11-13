import { Injectable } from '@nestjs/common';
import { Tweet } from '../../database-entities/tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTweetDto } from './dtos/create-tweet.dto';
import { PaginatedTweetInputDto } from './dtos/paginated-tweet-input.dto';
import { PaginatedTweetDto } from './dtos/paginated-tweet.dto';
import { PermissionService } from '../permission/permission.service';

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
    private readonly permissionRepository: PermissionService,
  ) {}

  async createTweet(args: CreateTweetDto): Promise<Tweet> {
    const tweet = this.tweetRepository.create(args);
    const createdTweet = await this.tweetRepository.save(tweet);

    const inheritPermission = !!args.parentTweetId;
    const viewPermissions = [];
    const editPermissions = [];
    if (inheritPermission) {
      const permission =
        await this.permissionRepository.findPermissionByTweetId(
          args.parentTweetId,
        );
      if (permission) {
        viewPermissions.push(...permission.viewPermissions);
        editPermissions.push(...permission.editPermissions);
      }
    }
    await this.permissionRepository.updateTweetPermissions({
      tweetId: createdTweet._id.toHexString(),
      inheritEditPermissions: inheritPermission,
      inheritViewPermissions: inheritPermission,
      viewPermissions: [args.authorId, ...viewPermissions],
      editPermissions: [args.authorId, ...editPermissions],
    });
    return createdTweet;
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
