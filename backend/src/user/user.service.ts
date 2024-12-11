import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async register(nombre_usuario: string, email: string, contraseña: string) {
        const hashedPassword = await bcrypt.hash(contraseña, 10);
        const user = this.userRepository.create({ nombre_usuario, email, contraseña: hashedPassword });
        return this.userRepository.save(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { email } });
    }
}
