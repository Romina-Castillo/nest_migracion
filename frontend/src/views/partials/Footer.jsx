import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import { Facebook, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', width: '110%' }}>
      <Container>
        <Grid container spacing={2}>
          {/* Dirección y contacto */}
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={5}>
              <i className="fa fa-map-marker" aria-hidden="true" style={{ marginRight: '8px' }}></i>
              <Typography variant="body1" component="p" sx={{ mb: 0 }}>
                F Inalicán Este 94, Malargüe, Mendoza, Argentina
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <i className="fa fa-phone" aria-hidden="true" style={{ marginRight: '8px' }}></i>
              <Typography variant="body1" component="p" sx={{ mb: 0 }}>
                0260447-1060
              </Typography>
            </Box>
          </Grid>

          {/* Redes sociales */}
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="h6" component="h5">
              Síguenos en nuestras redes sociales
            </Typography>
            <Link href="https://www.facebook.com/municipalidaddemalargue" target="_blank" color="inherit" sx={{ mr: 3 }} rel="noopener noreferrer">
              <Facebook fontSize="large" />
            </Link>
            <Link href="https://twitter.com/municipalidad" target="_blank" color="inherit" sx={{ mr: 3 }} rel="noopener noreferrer">
              <Twitter fontSize="large" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;