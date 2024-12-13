import { Controller, Get, Post, Body, Query, Render } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { Paciente } from './entities/paciente.entity';

@Controller('pacientes')
export class PacientesController {
    constructor(private readonly pacientesService: PacientesService) { }

    // Mostrar el listado de pacientes
    @Get()
    @Render('pacientes')
    async list() {
        const pacientes = await this.pacientesService.findAll();
        return { pacientes };
    }

    // Mostrar el formulario para agregar pacientes con direcciones
    @Get('formPaciente')
    @Render('formPaciente')
    async mostrarFormularioPaciente(@Query('id_direccion') idDireccion: number) {
        const direcciones = await this.pacientesService.findAllDirecciones();
        return { direcciones, idDireccion };
    }

    // Procesar el formulario para agregar un paciente
    @Post('agregar')
    async agregarPaciente(@Body() pacienteData: Partial<Paciente>) {
        await this.pacientesService.create(pacienteData);
        return { message: 'Paciente agregado correctamente' };
    }
}
