import { Test, TestingModule } from '@nestjs/testing';
import { ArmsService } from './arms.service';

describe('ArmsService', () => {
  let service: ArmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmsService],
    }).compile();

    service = module.get<ArmsService>(ArmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
