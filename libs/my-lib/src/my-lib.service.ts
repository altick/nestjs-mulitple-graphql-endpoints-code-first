import { Injectable } from '@nestjs/common';
import { TestModel } from './TestModel';

@Injectable()
export class MyLibService {
    sayHello(appName: string): TestModel {
        const model = new TestModel();
        model.message = `Hello from ${appName}!`;
        return model;
    }
}
