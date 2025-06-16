import { IsNotEmpty, IsPositive, IsOptional } from 'class-validator';

export class CreateRecursoProductoDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  nombre: string;

  @IsPositive({ message: 'El precio debe ser un número mayor a 0.' })
  precio: number;

  @IsOptional()
  descripcion?: string;
}
