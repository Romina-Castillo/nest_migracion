import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Musuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_usuario: string;

    @Column()
    email: string;

    @Column()
    contraseña: string;
}
