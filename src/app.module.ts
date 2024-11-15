import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupModule } from './modules/group/group.module';
import { TweetModule } from './modules/tweet/tweet.module';
import { PermissionModule } from './modules/permission/permission.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { Group } from './database-entities/group.entity';
import { Tweet } from './database-entities/tweet.entity';
import { Permission } from './database-entities/permission.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      entities: [Group, Tweet, Permission],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true, // Optional: sorts schema alphabetically
      playground: true, // Enables GraphQL Playground in dev mode
    }),
    GroupModule,
    TweetModule,
    PermissionModule,
  ],
})
export class AppModule {}
