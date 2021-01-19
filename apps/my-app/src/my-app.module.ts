import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MyLibModule } from 'myapp/my-lib';
import { join } from 'path';
import { HelloWorldResolver } from './hello-world/hello-world.resolver';

@Module({
  imports: [
    MyLibModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "apps/my-app/src/schema.gql"),
      sortSchema: true,
      fieldResolverEnhancers: ["guards", "interceptors"],
      context: ({ req }) => ({ headers: req.headers }),
  }),
  ],
  providers: [HelloWorldResolver],
})
export class MyAppModule {}
