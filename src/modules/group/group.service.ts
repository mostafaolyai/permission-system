import { Injectable } from '@nestjs/common';
import { Group } from '../../database-entities/group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {}

  async createGroup(userIds: string[], groupIds: string[]): Promise<Group> {
    return this.groupRepository.save({ userIds, groupIds });
  }
}
