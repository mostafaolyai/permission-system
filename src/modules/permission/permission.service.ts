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
    return this.permissionRepository.findOne({
      where: { tweetId: tweetId },
    });
  }

  async updateTweetPermissions(
    args: UpdateTweetPermissionsDto,
  ): Promise<boolean> {
    const permission = await this.findPermissionByTweetId(args.tweetId);

    let res;
    if (permission) {
      res = await this.permissionRepository.update(
        permission._id.toHexString(),
        {
          ...args,
          editPermissions: Array.from(
            new Set([...permission.editPermissions, ...args.editPermissions]),
          ),
          viewPermissions: Array.from(
            new Set([...permission.viewPermissions, ...args.viewPermissions]),
          ),
        },
      );
    } else {
      const per = this.permissionRepository.create(args);
      res = await this.permissionRepository.save(per);
    }
    return !!res;
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
