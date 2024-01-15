import React from 'react'
import { Typography, Container, Card, CardContent, Grid , CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './ThemesList.module.scss'

import { useClassC } from '@/contexts/classContext';

export default function ThemesList({ classId}) {
    const { classC } = useClassC();
    const themes = Object.values(classC.getThemes(classId))

    return (
     <Container maxWidth="lg" className={styles.container}>
        <Grid container spacing={4}>
            {themes.map(themeData => {
                return (
                    <Grid item key={themeData.id} xs={12} sm={6} md={3}>
                        <Card className={styles.card} component={Link} to={`/class/${classId}/theme/${themeData.id}`}>
                            <CardContent className={styles.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2" className={styles.cardHeader}>
                                    { themeData.heading }
                                </Typography>

                                <Typography>
                                    { themeData.description }
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" className={styles.cardButton}
                                >
                                    Вперед
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
      </Container>
    )
  }