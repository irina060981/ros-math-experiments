import React from "react";
import './App.css';
import { Typography, Container } from '@mui/material';
import { createExamples as createExamples1 } from '@mathExamples/math-examples1.js'
import { createExamples as createExamples2 } from '@mathExamples/chastnoye_stepeney.js'

import ExampleBlock from "./components/ExampleBlock";

function App() {
  return (
    <Container id="examplesList" fixed>
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 1
      </Typography>
      <ExampleBlock createExamples={createExamples1}  />

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 2
      </Typography>
      <ExampleBlock createExamples={createExamples2}/>

    </Container>
  )
}

export default App;

