import { Test, TestingModule } from '@nestjs/testing';
import { SharedResolver } from './shared.resolver';

describe('SharedResolver', () => {
  let resolver: SharedResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedResolver],
    }).compile();

    resolver = module.get<SharedResolver>(SharedResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
