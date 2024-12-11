import { Controller, Post, Body, Res, Session, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('/login')
    loginPage(@Res() res: Response) {
        res.sendFile('login.html', { root: 'public' });
    }

    @Get('/register')
    registerPage(@Res() res: Response) {
        res.sendFile('register.html', { root: 'public' });
    }

    @Post('/register')
    async register(@Body() body, @Res() res: Response) {
        const { nombre_usuario, email, contraseña } = body;
        await this.userService.register(nombre_usuario, email, contraseña);
        res.redirect('/login');
    }

    @Post('/login')
    async login(@Body() body, @Session() session, @Res() res: Response) {
        const { email, contraseña } = body;
        const user = await this.userService.findByEmail(email);

        if (user && (await bcrypt.compare(contraseña, user.contraseña))) {
            session.user = user;
            res.redirect('/pacientes');
        } else {
            res.redirect('/login');
        }
    }

    @Get('/logout')
    logout(@Session() session, @Res() res: Response) {
        session.destroy(() => {
            res.redirect('/');
        });
    }
}
