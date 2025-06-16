import { Module } from '@nestjs/common';
import { RecursoProductosService } from './recurso-productos.service';
import { RecursoProductosController } from './recurso-productos.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [RecursoProductosController],
  providers: [RecursoProductosService, PrismaService],
})
export class RecursoProductosModule {}
