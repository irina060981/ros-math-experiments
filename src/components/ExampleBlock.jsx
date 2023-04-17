import React, { useState, useEffect } from 'react'
import { Box, Stack, Button } from '@mui/material';
import ExampleCard from "./ExampleCard";

const ExampleBlock = ({ createExamples }) => {
  const [ examples, setExamples ] = useState([])
  const [ visibleExamples, setVisibleExamples ] = useState([])

  const generateExamples = () => {
    const localExamples = createExamples()
    console.info('localExamples - ', localExamples)
    setExamples(localExamples)
    setVisibleExamples([])
  }
  
  useEffect(() => { 
    generateExamples() 
  }, [])

  return (
    <Box mb="30px">
      <Stack direction="row" sx={{ gap: { lg: '30px', xs: '20px' } }} flexWrap="wrap" >
        
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

export default ExampleBlock