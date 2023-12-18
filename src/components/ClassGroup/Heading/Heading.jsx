import React from 'react'
import { Box, Typography, Container } from '@mui/material';

import { useClassC } from '@/contexts/classContext';

import styles from './Heading.module.scss'

export default function Heading({classId}) {
    const { classC } = useClassC();
    const classData = classC.getClassItem(classId)

    return (
    <Box className={styles.container}>
        <Container maxWidth="sm">
        <Typography
            className={styles.heading}
            component="h1"
            variant="h2"
            gutterBottom
        >
            {classData.label}
        </Typography>
        </Container>
    </Box>
    )
  }