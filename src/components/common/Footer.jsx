import React from 'react'
import { Box, Typography, Container, Card, CardActions, CardContent, CardMedia, Grid, Button, Link  } from '@mui/material';

const Footer = () => {
  function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
        {new Date().getFullYear()}
        </Typography>
    );
    }
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer" className='app-footer'>
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
        >
            Давайте учиться вместе
        </Typography>
        <Copyright />
    </Box>
  )
}

export default Footer