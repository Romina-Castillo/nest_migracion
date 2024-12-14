import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Header = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ width: '100%' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Button component={Link} to="/" color="inherit" aria-label="home" sx={{ mr: 50 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Municipalidad de Malargüe
          </Typography>
        </Button> 

      
        {user ? (
          <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component="a" href="/Pacientes">Listado de Pacientes</MenuItem>
              <MenuItem onClick={handleClose} component="a" href="/logout">Cerrar Sesión</MenuItem>
            </Menu>
          </div>
        ) : (
          <>
          <Button color="inherit" href="/pacientes">Pacientes</Button>
            <Button color="inherit" href="/login">Iniciar Sesión</Button>
            <Button color="inherit" href="/register">Registrarse</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;