import React from 'react'
import { Box, Typography, Container } from '@mui/material';

import { useClassC } from '@/contexts/classContext';

import styles from './Heading.module.scss'

export default function Heading({classId, themeId}) {
    const { classC } = useClassC();
    const classData = classC.getClassItem(classId)
    const themeData = classC.getThemeItem(classId, themeId)

    return (
    <Box className={styles.container}>
        <Container maxWidth="sm">
        <Typography
            className={styles.heading}
            component="h1"
            variant="h4"
            gutterBottom
        >
            {themeData.heading} ({classData.label})
        </Typography>
        </Container>
    </Box>
    )
  }