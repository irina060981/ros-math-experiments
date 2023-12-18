import React from 'react'
import { Typography, Container, Card, CardContent, Grid  } from '@mui/material';
import { Link } from 'react-router-dom';

import { useClassC } from '@/contexts/classContext';

import styles from './ClassesList.module.scss'

export default function ClassesList() {
    const { classC } = useClassC();

    return (
      <Container maxWidth="md" className={styles.container}>
        <Grid container spacing={4}>
            {classC.classList.map(classData => {
                return (
                    <Grid item key={classData.id} xs={12} sm={6} md={4}>
                        <Card className={styles.card} component={Link} to={`/class/${classData.id}`}>
                            <CardContent className={styles.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2" className={styles.cardHeader}>
                                    { classData.label }
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
      </Container>
    )
  }