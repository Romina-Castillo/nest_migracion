import React from 'react';
import { Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';


const Pacientes = ({ pacientes }) => {
  return (
    <>
     
      <Container>
        <Typography variant="h4" gutterBottom>
          Lista de Pacientes
        </Typography>
        <Button variant="contained" color="success" href="/pacientes/formPaciente" sx={{ mb: 3 }}>
          Agregar Paciente
        </Button>
        <TableContainer component={Paper} sx={{ mb: 8 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Tipo de Caso</TableCell>
                <TableCell>ID Dirección</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pacientes && pacientes.length > 0 ? (
                pacientes.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell>{patient.id}</TableCell>
                    <TableCell>{patient.nombre}</TableCell>
                    <TableCell>{patient.apellido}</TableCell>
                    <TableCell>{patient.tipo_caso}</TableCell>
                    <TableCell>{patient.id_direccion}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No hay pacientes registrados.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
     
    </>
  );
};

export default Pacientes;