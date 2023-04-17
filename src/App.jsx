import React, { useEffect, useState } from "react";
import './App.css';
import { Box, Typography, Stack, Button } from '@mui/material';
import { createExamples } from '@mathExamples/math-examples1.js'

import ExampleCard from "./components/ExampleCard";

function App() {
  const [ examples, setExamples ] = useState([])
  const [ visibleExamples, setVisibleExamples ] = useState([])

  const generateExamples = () => {
    const localExamples = createExamples()
    setExamples(localExamples)
    setVisibleExamples([])
  }
  
  useEffect(generateExamples, [])

  return (
    <Box id="examplesList" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Примеры</Typography>

      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" >
        
        {examples.length > 0 && examples.map((example, idx) => (
          <ExampleCard key={idx} example={example} visibleExamples={visibleExamples} setVisibleExamples={setVisibleExamples}/>
        ))}
      </Stack>
      
      <Stack direction="row" mt="20px">
        <Button 
            variant="contained"
            sx={{ bgcolor: "#2a8b2c" }}
            
            onClick={(e) => generateExamples()}
           >
             Пересоздать
          </Button>
      </Stack>
    </Box>
  )
}

export default App;



