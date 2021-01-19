import { Global, Module } from '@nestjs/common';
import { MyLibService } from './my-lib.service';
import { SharedResolver } from './shared/shared.resolver';

@Global()
@Module({
  providers: [MyLibService, SharedResolver],
  exports: [MyLibService, SharedResolver],
})
export class MyLibModule {}
