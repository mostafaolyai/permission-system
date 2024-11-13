import { Injectable } from '@nestjs/common';
import { Permission } from '../../database-entities/permission.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateTweetPermissionsDto } from './dtos/update-tweet-permissions.dto';
import { CanEditTweetDto } from './dtos/can-edit-tweet.dto';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  async findPermissionByTweetId(tweetId: string): Promise<Permission> {
    return this.permissionRepository.findOne({ where: { tweetId: tweetId } });
  }

  async updateTweetPermissions(
    args: UpdateTweetPermissionsDto,
  ): Promise<boolean> {
    const permission = await this.findPermissionByTweetId(args.tweetId);

    const updated = await this.permissionRepository.update(permission.id, args);
    return !!updated;
  }

  async canEditTweet(args: CanEditTweetDto): Promise<boolean> {
    const { userId, tweetId } = args;

    const permission = await this.findPermissionByTweetId(tweetId);
    if (permission) {
      return (
        permission.editPermissions.includes(userId) ||
        permission.inheritEditPermissions
      );
    }
    return false;
  }
}
