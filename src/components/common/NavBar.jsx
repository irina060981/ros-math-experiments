import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import CameraIcon from '@mui/icons-material/Camera';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="relative">
    <Toolbar
        variant = 'dense'
        sx={{
            backgroundColor: "#2a8b2c"
        }}
        >
        <a href="/" className="logoLink">
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap >
              РосМатика
          </Typography>
        </a>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar