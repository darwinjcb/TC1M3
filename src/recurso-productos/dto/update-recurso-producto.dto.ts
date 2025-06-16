import { PartialType } from '@nestjs/mapped-types';
import { CreateRecursoProductoDto } from './create-recurso-producto.dto';

export class UpdateRecursoProductoDto extends PartialType(CreateRecursoProductoDto) {}
