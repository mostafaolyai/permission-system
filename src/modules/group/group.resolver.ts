import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GroupService } from './group.service';
import { GroupDto } from './dtos/group.dto';
import { CreateGroupDto } from './dtos/create-group.dto';

@Resolver(GroupDto)
export class GroupResolver {
  constructor(private readonly groupService: GroupService) {}

  @Mutation(() => GroupDto, {
    description:
      'This is just an example description to show we can add more details for Query or Mutation',
  })
  async createGroup(@Args('input') args: CreateGroupDto): Promise<GroupDto> {
    return this.groupService.createGroup(args.userIds, args.groupIds);
  }
}
