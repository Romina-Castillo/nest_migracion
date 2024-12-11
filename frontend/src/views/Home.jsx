import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const Home = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Bienvenido/a al Portal de la Municipalidad de Malargüe
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom>
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
                            alt="Casos Confirmados en la Región"
                            sx={{ objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                Casos Confirmados en la Región
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Conoce los últimos informes de salud sobre los casos de dengue en Malargüe y las áreas cercanas.
                                Mantente informado sobre las acciones locales.
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
                            height="300"
                            image="/img/noticia.jpg"
                            alt="Campaña de Concientización"
                        />
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                Campaña de Concientización
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                La municipalidad lanza una nueva campaña para promover la eliminación de criaderos del mosquito y
                                la prevención del dengue en la ciudad.
                            </Typography>
                            <Button variant="contained" color="primary" href="#">
                                Leer más
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
