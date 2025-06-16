import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecursoProductoDto } from './dto/create-recurso-producto.dto';

@Injectable()
export class RecursoProductosService {
  constructor(private readonly prisma: PrismaService) {}

  async crear(data: CreateRecursoProductoDto) {
    // Validar si ya existe un producto con el mismo nombre
    const existente = await this.prisma.producto.findUnique({
      where: { nombre: data.nombre },
    });

    if (existente) {
      throw new ConflictException('Ya existe un producto con ese nombre.');
    }

    // Crear el producto
    return this.prisma.producto.create({
      data,
    });
  }

  async buscarPorId(id: number) {
    const producto = await this.prisma.producto.findUnique({
      where: { id },
    });

    if (!producto) {
      throw new NotFoundException('Producto no encontrado.');
    }

    return producto;
  }

  async listarTodos() {
    return this.prisma.producto.findMany();
  }
}
