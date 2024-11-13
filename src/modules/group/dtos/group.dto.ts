import { ObjectId } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Group')
export class GroupDto {
  @Field(() => String, { name: 'id' })
  _id: ObjectId;

  @Field(() => [String])
  userIds: string[];

  @Field(() => [String])
  groupIds: string[];
}
