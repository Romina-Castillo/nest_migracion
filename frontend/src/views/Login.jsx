import React from 'react';
import { Container, TextField, Button, Typography, Link, Box } from '@mui/material';

const Login = () => {
  return (
    <Container  maxWidth="lg" sx={{ mt:15, mb:15 }}>
      <Box p={3} boxShadow={3} sx={{ maxWidth: '600px', width: '100%', mx: 'auto', borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Iniciar Sesión
        </Typography>
        <form action="/login" method="POST">
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              id="email"
              name="email"
              required
              variant="outlined"
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              id="contraseña"
              name="contraseña"
              required
              variant="outlined"
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ py: 1.5 }}
          >
            Iniciar Sesión
          </Button>
        </form>
        <Box mt={3} textAlign="center">
          <Typography variant="body2">
            ¿No tienes una cuenta? <Link href="/register">Regístrate aquí</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;