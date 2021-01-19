import { Query, Resolver } from '@nestjs/graphql';
import { MyLibService } from 'myapp/my-lib';
import { TestModel } from 'myapp/my-lib/TestModel';

@Resolver(() => TestModel)
export class HelloWorldResolver {
  constructor(private mylib: MyLibService) { }
  
  @Query(() => TestModel)
    helloWorld() {
        return this.mylib.sayHello('MyApp')
    }
}
