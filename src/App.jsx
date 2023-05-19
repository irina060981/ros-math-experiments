import React from "react";
import './App.css';
import { Typography, Container } from '@mui/material';
import { createExamples as createExamples1 } from '@mathExamples/7klass/znacheniye_vyrazheniya.js'
import { createExamples as createExamples2 } from '@mathExamples/7klass/chastnoye_stepeney.js'
import { createExamples as createExamples3 } from '@mathExamples/7klass/proizvedeniye_stepeney.js'
import { createExamples as createExamples4 } from '@mathExamples/7klass/stepen_stepeni.js'
import { createExamples as createExamples5 } from '@mathExamples/7klass/lineynyye_uravneniya.js'
import { createExamples as createExamples6 } from '@mathExamples/7klass/sistemy_sposob_slozheniya.js'
import { createExamples as createExamples7 } from '@mathExamples/7klass/proizvedeniye_v_vide_stepeni.js'
import { createExamples as createExamples8 } from '@mathExamples/7klass/stepen_chastnogo.js'
import { createExamples as createExamples9 } from '@mathExamples/7klass/stepen_proizvedeniya.js'
import { createExamples as createExamples10 } from '@mathExamples/7klass/kvdarat_summy_i_kvadrat_raznosti.js'
import { createExamples as createExamples11 } from '@mathExamples/7klass/proizvedeniye_raznosti_na_summu.js'
import { createExamples as createExamples12 } from '@mathExamples/7klass/raznost_kvadratov.js'
import { createExamples as createExamples13 } from '@mathExamples/7klass/de_kvdarat_summy_i_kvadrat_raznosti.js'
import { createExamples as createExamples14 } from '@mathExamples/7klass/summa_raznost_kubov.js'
import { createExamples as createExamples15 } from '@mathExamples/7klass/de_summa_raznost_kubov.js'
import { createExamples as createExamples16 } from '@mathExamples/7klass/privedeniye_podobnykh_slagayemykh.js'
import { createExamples as createExamples17 } from '@mathExamples/7klass/vyrazheniya_desyatichnykh_drobi.js'
import { createExamples as createExamples18 } from '@mathExamples/7klass/vyrazheniya_drobi.js'
import { createExamples as createExamples19 } from '@mathExamples/7klass/vyrazheniya_ratsionalnyye_vychisleniya.js'
import { createExamples as createExamples20 } from '@mathExamples/7klass/raspredelitelnoye_svoystvo.js'
import { createExamples as createExamples21 } from '@mathExamples/7klass/odnochleny.js'
import { createExamples as createExamples22 } from '@mathExamples/7klass/odnochlen_na_mnogochlen.js'
import { createExamples as createExamples23 } from '@mathExamples/7klass/vyneseniye_za_skobki.js'
import { createExamples as createExamples24 } from '@mathExamples/7klass/mnogochlen_na_mnogochlen.js'
import { createExamples as createExamples25 } from '@mathExamples/7klass/metod_gruppirovki.js'
import { createExamples as createExamples26 } from '@mathExamples/7klass/proizvedeniye_odnochlenov.js'
import { createExamples as createExamples27 } from '@mathExamples/7klass/vozvedeniye_odnochlena_stepen.js'
import { createExamples as createExamples28 } from '@mathExamples/7klass/mnogochleny_standartnyy_vyid.js'
import { createExamples as createExamples29 } from '@mathExamples/7klass/summa_raznost_mnogochlenov.js'
import { createExamples as createExamples30 } from '@mathExamples/7klass/vyrazheniya_sravneniy.js'

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

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 13
      </Typography>
      <ExampleBlock createExamples={createExamples13}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 14
      </Typography>
      <ExampleBlock createExamples={createExamples14}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 15
      </Typography>
      <ExampleBlock createExamples={createExamples15}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 16
      </Typography>
      <ExampleBlock createExamples={createExamples16}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 17
      </Typography>
      <ExampleBlock createExamples={createExamples17}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 18
      </Typography>
      <ExampleBlock createExamples={createExamples18}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 19
      </Typography>
      <ExampleBlock createExamples={createExamples19}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 20
      </Typography>
      <ExampleBlock createExamples={createExamples20}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 21
      </Typography>
      <ExampleBlock createExamples={createExamples21}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 22
      </Typography>
      <ExampleBlock createExamples={createExamples22}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 23
      </Typography>
      <ExampleBlock createExamples={createExamples23}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 24
      </Typography>
      <ExampleBlock createExamples={createExamples24}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 25
      </Typography>
      <ExampleBlock createExamples={createExamples25}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 26
      </Typography>
      <ExampleBlock createExamples={createExamples26}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 27
      </Typography>
      <ExampleBlock createExamples={createExamples27}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 28
      </Typography>
      <ExampleBlock createExamples={createExamples28}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 29
      </Typography>
      <ExampleBlock createExamples={createExamples29}/>

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Примеры 30
      </Typography>
      <ExampleBlock createExamples={createExamples30}/>
    </Container>
  )
}

export default App;

