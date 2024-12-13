import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { Direccion } from './entities/direccion.entity';
import { Response } from 'express';

@Controller('api/direcciones')
export class DireccionesController {
    constructor(private readonly direccionesService: DireccionesService) { }

    @Post('agregar')
    async agregarDireccion(@Body() data: Partial<Direccion>, @Res() res: Response) {
        try {
            const nuevaDireccion = await this.direccionesService.crearDireccion(data);
            return res.status(HttpStatus.CREATED).json({ id_direccion: nuevaDireccion.id_direccion });
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error al agregar la dirección' });
        }
    }
}
