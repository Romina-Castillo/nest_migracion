import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Mdireccion')
export class Direccion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    barrio: string;

    @Column()
    calle: string;

    @Column()
    numero: string;
}
