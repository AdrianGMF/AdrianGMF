import { Test, TestingModule } from '@nestjs/testing';
import { ArmsController } from './arms.controller';
import { ArmsService } from './arms.service';

describe('ArmsController', () => {
  let controller: ArmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArmsController],
      providers: [ArmsService],
    }).compile();

    controller = module.get<ArmsController>(ArmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
