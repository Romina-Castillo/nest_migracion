// para definir la estructura de la tabla de usuario

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Musuario')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_usuario: string;

    @Column({ unique: true })
    email: string;

    @Column()
    contraseña: string;
}
