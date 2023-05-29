import React from 'react'
import { Typography, Container, Card, CardActions, CardContent, Grid, Button  } from '@mui/material';
import { Link } from 'react-router-dom';

const ExamplesCardsGrid = () => {
  const cards = [
    { 
        id: 1,
        heading: "Значение выражения",
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
    },
    { 
        id: 6,
        heading: "Системы уравнений. Способ сложения.",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 7,
        heading: "Произведение в виде степени",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 8,
        heading: "Степень частного",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 9,
        heading: "Степень произведения",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 10,
        heading: "Квадрат суммы и разности двух выражений",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 11,
        heading: "Произведение разности на сумму",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 12,
        heading: "Расность квадратов",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 13,
        heading: "Разложение на множители. Квадрат суммы и разностидвух выражений.",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 14,
        heading: "Сумма и разность кубов",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 15,
        heading: "Разложение на множители. Сумма и разность кубов",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 16,
        heading: "Приведение подобных слагаемых",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 17,
        heading: "Числовые выражения. Десятичные дроби",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 18,
        heading: "Числовые выражения. Дроби",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 19,
        heading: "Числовые выражения. Рациональные вычисления",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 20,
        heading: "Распределительное свойство умножения",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 21,
        heading: "Одночлены.Стандартный вид",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 22,
        heading: "Призведение многочлена на многочлен",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 23,
        heading: "Вынесение общего множителя за скобки",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 24,
        heading: "Произведение многочленов",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 25,
        heading: "Метод группировки",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 26,
        heading: "Произведение одночленов",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 27,
        heading: "Возведение одночлена в степень",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 28,
        heading: "Мнгочлены. Стандартный вид",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 29,
        heading: "Сумма и разность многочленов",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 30,
        heading: "Сравнение выражений",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 31,
        heading: "Рациональные дроби. Найти значение дроби",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 32,
        heading: "Рациональные дроби. Допустимые значения",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 33,
        heading: "Рациональные дроби. Сокращение дробей",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 34,
        heading: "Сумма и разность дробей с одинаковыми знаменателями",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 35,
        heading: "Сумма и разность дробей с разными знаменателями",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 36,
        heading: "Произведение рациональных дробей",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 37,
        heading: "Частное рациональных дробей",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 38,
        heading: "Вычисление значения квадратного корня",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    },
    { 
        id: 39,
        heading: "Корень произведения и дроби",
        description: "Эти упражнения помогут потренировать навык работать со степенями"
    }



  ];

  return (
    <Container sx={{ py: 8, paddingTop: '10px' }} maxWidth="lg">

        <Grid container spacing={4}>
        {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={3}>
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