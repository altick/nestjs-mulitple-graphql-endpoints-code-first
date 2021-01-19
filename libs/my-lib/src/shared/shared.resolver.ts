import { Query, Resolver } from '@nestjs/graphql';
import { MyLibService } from '../my-lib.service';
import { TestModel } from '../TestModel';

@Resolver(() => TestModel)
export class SharedResolver {
  constructor(private mylib: MyLibService) { }

    @Query(() => TestModel)
    shared() {
        return this.mylib.sayHello('Shared')
    }
}
