import { Test, TestingModule } from '@nestjs/testing';
import { RecursoProductosService } from './recurso-productos.service';

describe('RecursoProductosService', () => {
  let service: RecursoProductosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecursoProductosService],
    }).compile();

    service = module.get<RecursoProductosService>(RecursoProductosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
