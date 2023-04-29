import React from 'react'
import { Typography, Container, Box } from '@mui/material';
import { createExamples as createExamples1 } from '@mathExamples/znacheniye_vyrazheniya.js'
import { createExamples as createExamples2 } from '@mathExamples/chastnoye_stepeney.js'
import { createExamples as createExamples3} from '@mathExamples/proizvedeniye_stepeney.js'
import { createExamples as createExamples4} from '@mathExamples/stepen_stepeni.js'
import { createExamples as createExamples5 } from '@mathExamples/lineynyye_uravneniya.js'
import { createExamples as createExamples6 } from '@mathExamples/sistemy_sposob_slozheniya.js'
import { createExamples as createExamples7 } from '@mathExamples/proizvedeniye_v_vide_stepeni.js'
import { createExamples as createExamples8 } from '@mathExamples/stepen_chastnogo.js'
import { createExamples as createExamples9 } from '@mathExamples/stepen_proizvedeniya.js'
import { createExamples as createExamples10 } from '@mathExamples/kvdarat_summy_i_kvadrat_raznosti.js'
import { createExamples as createExamples11 } from '@mathExamples/proizvedeniye_raznosti_na_summu.js'
import { createExamples as createExamples12 } from '@mathExamples/raznost_kvadratov.js'

import ExampleBlock from "../components/ExampleBlock";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const dict = {
    1: { fn: createExamples1, title: 'Значение выражений' },
    2: { fn: createExamples2, title: 'Частное степеней' },
    3: { fn: createExamples3, title: 'Произведение степеней' },
    4: { fn: createExamples4, title: 'Степень степени' },
    5: { fn: createExamples5, title: 'Линейные уравнения' },
    6: { fn: createExamples6, title: 'Системы уравнений. Способ Сложения.' },
    7: { fn: createExamples7, title: 'Произведение в виде степени' },
    8: { fn: createExamples8, title: 'Степень частного' },
    9: { fn: createExamples9, title: 'Степень произведения' },
    10: { fn: createExamples10, title: 'Квадрат суммы и разности двух выражений' },
    11: { fn: createExamples11, title: 'Произведение разности на сумму' },
    12: { fn: createExamples12, title: 'Разность квадратов' }

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