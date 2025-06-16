import { Test, TestingModule } from '@nestjs/testing';
import { RecursoProductosController } from './recurso-productos.controller';
import { RecursoProductosService } from './recurso-productos.service';

describe('RecursoProductosController', () => {
  let controller: RecursoProductosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecursoProductosController],
      providers: [RecursoProductosService],
    }).compile();

    controller = module.get<RecursoProductosController>(RecursoProductosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
