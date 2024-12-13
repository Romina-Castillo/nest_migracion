import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const Home = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 8 }}>
            <Typography variant="h5" component="h1" gutterBottom>
                Bienvenido/a al Portal de la Municipalidad de Malargüe
            </Typography>

            <Typography variant="h6" component="h2" gutterBottom>
                Últimas Noticias sobre el Dengue
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
                Mantente informado sobre las medidas de prevención y control del dengue en nuestra comunidad.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="300"
                            image="/img/prevencion.jpg"
                            alt="Medidas Preventivas contra el Dengue"
                        />
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                Medidas Preventivas contra el Dengue
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Aprende cómo evitar la propagación del mosquito Aedes aegypti y proteger a tu familia.
                                Recuerda eliminar lugares donde pueda acumularse agua.
                            </Typography>
                            <Button variant="contained" color="primary" href="#">
                                Leer más
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="310"
                            image="/img/casos.png"
                            alt="Casos de Dengue"
                        />
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                Casos de Dengue
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Infórmate sobre los últimos casos de dengue reportados en nuestra comunidad.
                            </Typography>
                            <Button variant="contained" color="primary" href="#">
                                Leer más
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="310"
                            image="/img/noticias.jpg"
                            alt="Casos de Dengue"
                        />
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                Campaña de concientizacion
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Infórmate sobre los últimos casos de dengue reportados en nuestra comunidad.
                            </Typography>
                            <Button variant="contained" color="primary" href="#">
                                Leer más
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Añade más tarjetas aquí si es necesario */}
            </Grid>
        </Container>
    );
};

export default Home;