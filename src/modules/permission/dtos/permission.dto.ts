import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Permission')
export class PermissionDto {
  @Field(() => String)
  id: string;

  @Field(() => String)
  tweetId: string;

  @Field(() => Boolean)
  inheritViewPermissions: boolean;

  @Field(() => Boolean)
  inheritEditPermissions: boolean;

  @Field(() => [String])
  viewPermissions: string[];

  @Field(() => [String])
  editPermissions: string[];
}
