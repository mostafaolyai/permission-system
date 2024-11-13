import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateGroup')
export class CreateGroupDto {
  @Field(() => [String], {
    description:
      'this is just an example description to show we can add more details for each field',
  })
  userIds: string[];

  @Field(() => [String])
  groupIds: string[];
}
