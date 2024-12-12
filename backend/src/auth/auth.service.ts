// para manejas la lógica de registro

import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async register(registerDto: RegisterDto): Promise<void> {
        const { nombre_usuario, email, contraseña } = registerDto;

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(contraseña, 10);

        const nuevoUsuario = this.userRepository.create({
            nombre_usuario,
            email,
            contraseña: hashedPassword,
        });

        try {
            await this.userRepository.save(nuevoUsuario);
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY' || error.code === '23505') {
                throw new ConflictException('Este correo ya está registrado');
            } else {
                throw new InternalServerErrorException('Error al registrar el usuario');
            }
        }
    }
}
