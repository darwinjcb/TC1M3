import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { RecursoProductosService } from './recurso-productos.service';
import { CreateRecursoProductoDto } from './dto/create-recurso-producto.dto';

@Controller('recurso-productos')
export class RecursoProductosController {
  constructor(private readonly recursoProductosService: RecursoProductosService) {}

  @Post()
  crear(@Body() createRecursoProductoDto: CreateRecursoProductoDto) {
    return this.recursoProductosService.crear(createRecursoProductoDto);
  }

  @Get()
  listarTodos() {
    return this.recursoProductosService.listarTodos();
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.recursoProductosService.buscarPorId(id);
  }
}
