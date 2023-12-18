import React from 'react'
import { Box, Typography, Container } from '@mui/material';
import styles from './Heading.module.scss'

export default function Heading() {
    return (
    <Box className={styles.container}>
        <Container maxWidth="sm">
        <Typography
            className={styles.heading}
            component="h1"
            variant="h2"
            gutterBottom
        >
            Росматика
        </Typography>
        <Typography variant="h5" className={styles.description} paragraph>
            Ну а тут какое-то описание
        </Typography>
        </Container>
    </Box>
    )
  }