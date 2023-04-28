import React from 'react'
import { Typography, Container, Box } from '@mui/material';
import { createExamples as createExamples1 } from '@mathExamples/znacheniye_vyrazheniya.js'
import { createExamples as createExamples2 } from '@mathExamples/chastnoye_stepeney.js'
import { createExamples as createExamples3} from '@mathExamples/proizvedeniye_stepeney.js'
import { createExamples as createExamples4} from '@mathExamples/stepen_stepeni.js'
import { createExamples as createExamples5 } from '@mathExamples/lineynyye_uravneniya.js'
import { createExamples as createExamples6 } from '@mathExamples/sistemy_sposob_slozheniya.js'

import ExampleBlock from "../components/ExampleBlock";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const dict = {
    1: { fn: createExamples1, title: 'Значение выражений' },
    2: { fn: createExamples2, title: 'Частное степеней' },
    3: { fn: createExamples3, title: 'Произведение степеней' },
    4: { fn: createExamples4, title: 'Степень степени' },
    5: { fn: createExamples5, title: 'Линейные уравнения' },
    6: { fn: createExamples6, title: 'Системы уравнений. Способ Сложения.' }
  }
  return { examplesFn: (dict[params.examplesGroupId] ?? dict[1]) };
}

const Examples = () => {
  const { examplesFn } = useLoaderData();
  return (
    <Box
        sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
        }}
    >
        <Container fixed>
        <Typography
            component="h2"
            variant="h3"
            align="center"
            color="#2a8b2c"
            gutterBottom
            sx = {{ mb: "20px" }}
        >
            { examplesFn.title }
        </Typography>
        <ExampleBlock createExamples={examplesFn.fn}  />
        </Container>
    </Box>

  )
}

export default Examples