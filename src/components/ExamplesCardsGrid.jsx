import React from 'react'
import { Box, Typography, Container, Card, CardActions, CardContent, CardMedia, Grid, Button  } from '@mui/material';
import { Link } from 'react-router-dom';

const ExamplesCardsGrid = () => {
  const cards = [
    { 
        id: 1,
        heading: "Простые операции",
        description: "Эти упражнения помогут потренировать навык решения простых уравнений"
    },
    { 
        id: 2,
        heading: "Частное степеней",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 3,
        heading: "Произведение степеней",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 4,
        heading: "Степень степени",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 5,
        heading: "Линейные уравнения",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    }


  ];

  return (
    <Container sx={{ py: 8 }} maxWidth="md">

        <Grid container spacing={4}>
        {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ color: "#6a2292" }}>
                        { card.heading }
                    </Typography>
                    <Typography>
                        { card.description }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" 
                    sx={{ color: "#6a2292" }}
                    component={Link} to={`/examples/${card.id}`}
                    >
                        Вперед
                    </Button>
                </CardActions>
            </Card>
            </Grid>
        ))}
        </Grid>
    </Container>
  )
}

export default ExamplesCardsGrid