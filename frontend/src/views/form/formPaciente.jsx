import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormPaciente = () => {
    const { register, handleSubmit, control, setValue } = useForm();
    const [direcciones, setDirecciones] = useState([]);
    const navigate = useNavigate();

    // Comprobar si el usuario está logueado
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    // Cargar direcciones desde el backend
    useEffect(() => {
        const fetchDirecciones = async () => {
            try {
                const response = await fetch('http://localhost:3005/direcciones');
                const data = await response.json();
                setDirecciones(data);
            } catch (error) {
                console.error('Error al cargar direcciones:', error);
            }
        };

        fetchDirecciones();
    }, []);
// se realiza una petición GET al backend para obtener las direcciones disponibles

    // enviar datos al backend con POST
    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3005/pacientes/agregar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Paciente registrado exitosamente');
                navigate('/pacientes');
            } else {
                alert('Error al registrar el paciente');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Registrar Nuevo Paciente
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Nombre"
                    fullWidth
                    margin="normal"
                    {...register('nombre', { required: true })}
                />
                <TextField
                    label="Apellido"
                    fullWidth
                    margin="normal"
                    {...register('apellido', { required: true })}
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel>Tipo de Caso</InputLabel>
                    <Controller
                        name="tipo_caso"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Select {...field}>
                                <MenuItem value="Grupo A">Grupo A</MenuItem>
                                <MenuItem value="Grupo B">Grupo B</MenuItem>
                                <MenuItem value="Grupo C">Grupo C</MenuItem>
                            </Select>
                        )}
                    />
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel>Dirección</InputLabel>
                    <Controller
                        name="id_direccion"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Select {...field}>
                                {direcciones.map((direccion) => (
                                    <MenuItem key={direccion.id_direccion} value={direccion.id_direccion}>
                                        {`${direccion.barrio}, ${direccion.calle} ${direccion.numero}`}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                </FormControl>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => navigate('/direcciones/formulario')}
                    >
                        Agregar Dirección
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Registrar Paciente
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default FormPaciente;
