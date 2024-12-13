import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { Paciente } from './entities/paciente.entity';
import { Direccion } from '../direcciones/entities/direccion.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Paciente, Direccion])],
    controllers: [PacientesController],
    providers: [PacientesService],
})
export class PacientesModule { }
