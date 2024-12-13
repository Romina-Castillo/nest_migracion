import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Direccion } from './entities/direccion.entity';

@Injectable()
export class DireccionesService {
    constructor(
        @InjectRepository(Direccion)
        private readonly direccionRepository: Repository<Direccion>,
    ) { }

    async crearDireccion(data: Partial<Direccion>): Promise<Direccion> {
        const nuevaDireccion = this.direccionRepository.create(data);
        return await this.direccionRepository.save(nuevaDireccion);
    }
}
