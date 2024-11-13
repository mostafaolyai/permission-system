## Description

#### Task Description: [link](https://bettermode.notion.site/Senior-Backend-Engineer-1264dc460e6d807399c8cff16be8de4d)
#### Tech Stack Requirements:
 - Language:vTypeScript
 - Framework: NestJS (or other NodeJS frameworks like ExpressJS)
 - Database: MongoDb (If i develop this task in real project i will use PostgreSQL)
 - API: GraphQL 

### What we did?
  During this implementation I tried to just create based on `gql` that task ask us not more.
  There were some conflicts, for example:
  - `FilterTweet` was defined but it haven't used (I've used).
  - I deleted `AuthorId` and used it inside `FilterTweet`
  - ...

### what we could do?
  - We could add authentication  
  - We could create `User` collection and mock system user and also, using real data to for author
  - We could create `DockerFile` to simple run (project is simple and we just need to run MongoDB)
  - We could create `DockerCompose` to simple run (project is simple and we just need to run MongoDB)
  - We could create `Test with Jest`, but i didn't see to do that inside the task explanation.

## Project setup

```bash
$ run mongo container on docker on 27017 port or change port in .env file
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Playground Link
 ### http://localhost:3000/graphql
