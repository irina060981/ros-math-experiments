import React from 'react'
import { Typography, Container, Box } from '@mui/material';
import { createExamples as createExamples1 } from '@mathExamples/math-examples1.js'
import { createExamples as createExamples2 } from '@mathExamples/chastnoye_stepeney.js'
import ExampleBlock from "../components/ExampleBlock";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const dict = {
    1: { fn: createExamples1, title: 'Простые операции' },
    2: { fn: createExamples2, title: 'Операции со степенями' }
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