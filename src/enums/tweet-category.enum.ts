import { registerEnumType } from '@nestjs/graphql';

export enum TweetCategory {
  Sport = 'Sport',
  Finance = 'Finance',
  Tech = 'Tech',
  News = 'News',
}

registerEnumType(TweetCategory, {
  name: 'TweetCategory',
});
