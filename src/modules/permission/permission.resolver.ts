import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PermissionDto } from './dtos/permission.dto';
import { PermissionService } from './permission.service';
import { UpdateTweetPermissionsDto } from './dtos/update-tweet-permissions.dto';
import { CanEditTweetDto } from './dtos/can-edit-tweet.dto';

@Resolver(PermissionDto)
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}

  @Mutation(() => Boolean)
  async updateTweetPermission(
    @Args('input') args: UpdateTweetPermissionsDto,
  ): Promise<boolean> {
    return this.permissionService.updateTweetPermissions(args);
  }

  @Query(() => Boolean)
  async canEditTweet(@Args('input') args: CanEditTweetDto): Promise<boolean> {
    return this.permissionService.canEditTweet(args);
  }
}
