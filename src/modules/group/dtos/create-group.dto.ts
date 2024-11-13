import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateGroup')
export class CreateGroupDto {
  @Field(() => [String])
  userIds: string[];

  @Field(() => [String])
  groupIds: string[];
}
