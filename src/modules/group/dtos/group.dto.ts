import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Group')
export class GroupDto {
  @Field(() => String, { name: 'id' })
  id?: string;

  @Field(() => [String])
  userIds: string[];

  @Field(() => [String])
  groupIds: string[];
}
