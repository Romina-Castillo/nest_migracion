import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [errorMessage, setErrorMessage] = React.useState('');

    // Función para manejar el envío del formulario
    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre_usuario: data.nombre_usuario,
                    email: data.email,
                    contraseña: data.contraseña,
                }),
            });

            if (!response.ok) {
                throw new Error('Error en el registro');
            }

            const responseData = await response.json();
            console.log('Registro exitoso:', responseData);

            // Resetear el formulario y redirigir al login
            reset();
            setErrorMessage('');
            alert('Registro exitoso. Redirigiendo al login...');
            window.location.href = '/';     // cambiar a /login
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
                        ¿Ya tienes una cuenta? <a href="/">Inicia sesión aquí</a>    
                        {/* // cambiar a /login */}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
