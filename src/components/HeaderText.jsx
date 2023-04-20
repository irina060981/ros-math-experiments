import React from 'react'
import { Box, Typography, Container } from '@mui/material';

const HeaderText = () => {
  return (
    <Box
        sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
        }}
    >
        <Container maxWidth="sm">
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#2a8b2c"
            gutterBottom
        >
            РосМатематика
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Ну а тут какое-то приветственное слово, рассказывающее о проекте
        </Typography>
        </Container>
    </Box>
  )
}

export default HeaderText