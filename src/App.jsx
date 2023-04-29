import React from "react";
import './App.css';
import { Typography, Container } from '@mui/material';
import { createExamples as createExamples1 } from '@mathExamples/znacheniye_vyrazheniya.js'
import { createExamples as createExamples2 } from '@mathExamples/chastnoye_stepeney.js'
import { createExamples as createExamples3 } from '@mathExamples/proizvedeniye_stepeney.js'
import { createExamples as createExamples4 } from '@mathExamples/stepen_stepeni.js'
import { createExamples as createExamples5 } from '@mathExamples/lineynyye_uravneniya.js'
import { createExamples as createExamples6 } from '@mathExamples/sistemy_sposob_slozheniya.js'
import { createExamples as createExamples7 } from '@mathExamples/proizvedeniye_v_vide_stepeni.js'
import { createExamples as createExamples8 } from '@mathExamples/stepen_chastnogo.js'
import { createExamples as createExamples9 } from '@mathExamples/stepen_proizvedeniya.js'
import { createExamples as createExamples10 } from '@mathExamples/kvdarat_summy_i_kvadrat_raznosti.js'
import { createExamples as createExamples11 } from '@mathExamples/proizvedeniye_raznosti_na_summu.js'
import { createExamples as createExamples12 } from '@mathExamples/raznost_kvadratov.js'


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

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 3
      </Typography>
      <ExampleBlock createExamples={createExamples3}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 4
      </Typography>
      <ExampleBlock createExamples={createExamples4}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 5
      </Typography>
      <ExampleBlock createExamples={createExamples5}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 6
      </Typography>
      <ExampleBlock createExamples={createExamples6}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 7
      </Typography>
      <ExampleBlock createExamples={createExamples7}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 8
      </Typography>
      <ExampleBlock createExamples={createExamples8}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 9
      </Typography>
      <ExampleBlock createExamples={createExamples9}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 10
      </Typography>
      <ExampleBlock createExamples={createExamples10}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 11
      </Typography>
      <ExampleBlock createExamples={createExamples11}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 12
      </Typography>
      <ExampleBlock createExamples={createExamples12}/>
    </Container>
  )
}

export default App;

