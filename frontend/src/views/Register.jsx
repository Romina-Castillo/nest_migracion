import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }

            // Resetear el formulario
            reset();
            setErrorMessage('');
            alert('Registro exitoso. Redirigiendo al login...');
            window.location.href = '/'; // Redirección al /login
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mt:15, mb:15 }}>
            <Box p={3} boxShadow={3} sx={{ maxWidth: '600px', mx: 'auto' }}>
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    Regístrate
                </Typography>

                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box mb={2}>
                        <TextField
                            label="Nombre de Usuario"
                            fullWidth
                            {...register('nombre_usuario', { required: 'Este campo es obligatorio' })}
                            error={!!errors.nombre_usuario}
                            helperText={errors.nombre_usuario?.message}
                        />
                    </Box>

                    <Box mb={2}>
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            {...register('email', { required: 'Este campo es obligatorio' })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    </Box>

                    <Box mb={2}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            fullWidth
                            {...register('contraseña', { required: 'Este campo es obligatorio' })}
                            error={!!errors.contraseña}
                            helperText={errors.contraseña?.message}
                        />
                    </Box>

                    <Box mb={2}>
                        <TextField
                            label="Confirmar Contraseña"
                            type="password"
                            fullWidth
                            {...register('confirmar_contraseña', { required: 'Este campo es obligatorio' })}
                            error={!!errors.confirmar_contraseña}
                            helperText={errors.confirmar_contraseña?.message}
                        />
                    </Box>

                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Registrarse
                    </Button>

                    <Box mt={3} textAlign="center">
                        <Typography variant="body2">
                            ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
                        </Typography>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default Register;