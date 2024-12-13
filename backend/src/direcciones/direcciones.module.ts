import { Module } from '@nestjs/common';
import { DireccionesController } from './direcciones.controller';
import { DireccionesService } from './direcciones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Direccion } from './entities/direccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Direccion])],
  controllers: [DireccionesController],
  providers: [DireccionesService],
})
export class DireccionesModule {}
