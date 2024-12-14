// para definir las rutas

import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
        try {
            await this.authService.register(registerDto);
            // redirigir al /login después del registro exitoso
            // return res.redirect('/');
        } catch (error) {
            // Devolver un mensaje de error con un estado 400
            return res
                .status(HttpStatus.BAD_REQUEST)
                .json({ message: error.message });
        }
    }
}
