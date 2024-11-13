import { Injectable } from '@nestjs/common';
import { Group } from '../../database-entities/group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dtos/create-group.dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {}

  async createGroup(args: CreateGroupDto): Promise<Group> {
    const { userIds, groupIds } = args;
    const group = this.groupRepository.create({ userIds, groupIds });
    return this.groupRepository.save(group);
  }
}
