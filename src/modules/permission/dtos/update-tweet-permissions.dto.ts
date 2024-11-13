import { Field, InputType } from '@nestjs/graphql';

@InputType('UpdateTweetPermissions')
export class UpdateTweetPermissionsDto {
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
