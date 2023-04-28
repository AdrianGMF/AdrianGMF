import { Test, TestingModule } from '@nestjs/testing';
import { LegsController } from './legs.controller';
import { LegsService } from './legs.service';

describe('LegsController', () => {
  let controller: LegsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LegsController],
      providers: [LegsService],
    }).compile();

    controller = module.get<LegsController>(LegsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
