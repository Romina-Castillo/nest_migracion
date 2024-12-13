import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [errorMessage, setErrorMessage] = React.useState('');

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3005/register', {
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
        <Container maxWidth="sm">
            <Box mt={5} p={3} boxShadow={3}>
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

                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Registrar
                    </Button>
                </form>

                <Box mt={3} textAlign="center">
                    <Typography variant="body2">
                        ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
