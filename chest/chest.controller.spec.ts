import { Test, TestingModule } from '@nestjs/testing';
import { ChestController } from './chest.controller';
import { ChestService } from './chest.service';

describe('ChestController', () => {
  let controller: ChestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChestController],
      providers: [ChestService],
    }).compile();

    controller = module.get<ChestController>(ChestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
