import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecursoProductosModule } from './recurso-productos/recurso-productos.module';

@Module({
  imports: [RecursoProductosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
