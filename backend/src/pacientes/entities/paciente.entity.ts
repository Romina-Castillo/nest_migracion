// para definir la estructura de la tabla de pacientes

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Mpacientes')
export class Paciente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    tipo_caso: string;

    @Column()
    id_direccion: number;
}
