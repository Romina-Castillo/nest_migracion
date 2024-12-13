// src/pacientes/pacientes.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { Direccion } from '../direcciones/entities/direccion.entity';

@Injectable()
export class PacientesService {
    constructor(
        @InjectRepository(Paciente)
        private readonly pacienteRepository: Repository<Paciente>,

        @InjectRepository(Direccion)
        private readonly direccionRepository: Repository<Direccion>,
    ) { }

    // Listar pacientes
    findAll(): Promise<Paciente[]> {
        return this.pacienteRepository.find();
    }

    // Agregar un nuevo paciente
    create(pacienteData: Partial<Paciente>): Promise<Paciente> {
        const nuevoPaciente = this.pacienteRepository.create(pacienteData);
        return this.pacienteRepository.save(nuevoPaciente);
    }

    // Obtener todas las direcciones
    findAllDirecciones(): Promise<Direccion[]> {
        return this.direccionRepository.find();
    }
}
