// para definir la estructura de la tabla de direcciones

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Mdireccion')
export class Direccion {
    @PrimaryGeneratedColumn()
    id_direccion: number;

    @Column()
    barrio: string;

    @Column()
    calle: string;

    @Column()
    numero: string;
}
