import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Typography } from '@mui/material';

function FormDireccion() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/direcciones/agregar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                alert('Dirección registrada exitosamente');
                reset(); // Limpia el formulario
                // Redirige al formulario de pacientes con el ID de la nueva dirección
                window.location.href = `/pacientes/formPaciente?id_direccion=${result.id_direccion}`;
            } else {
                alert('Error al registrar dirección');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al conectar con el servidor');
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Registrar Nueva Dirección
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="Barrio"
                    margin="normal"
                    {...register('barrio', { required: 'El barrio es obligatorio' })}
                    error={!!errors.barrio}
                    helperText={errors.barrio?.message}
                />
                <TextField
                    fullWidth
                    label="Calle"
                    margin="normal"
                    {...register('calle', { required: 'La calle es obligatoria' })}
                    error={!!errors.calle}
                    helperText={errors.calle?.message}
                />
                <TextField
                    fullWidth
                    label="Número"
                    type="number"
                    margin="normal"
                    {...register('numero', { required: 'El número es obligatorio' })}
                    error={!!errors.numero}
                    helperText={errors.numero?.message}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Registrar Dirección
                </Button>
            </form>
        </Container>
    );
}

export default FormDireccion;
