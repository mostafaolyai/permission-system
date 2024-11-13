import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetResolver } from './tweet.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from '../../database-entities/tweet.entity';
import '../../enums/tweet-category.enum';
import { PermissionModule } from '../permission/permission.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tweet]), PermissionModule],
  providers: [TweetService, TweetResolver],
})
export class TweetModule {}
