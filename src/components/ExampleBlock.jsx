import React, { useState, useEffect } from 'react'
import { Box, Stack, Button } from '@mui/material';
import ExampleCard from "./ExampleCard";
import { Link } from 'react-router-dom';

const ExampleBlock = ({ createExamples }) => {
  const [ examples, setExamples ] = useState([])
  const [ visibleExamples, setVisibleExamples ] = useState([])

  const generateExamples = () => {
    const localExamples = createExamples()
    setExamples(localExamples)
    setVisibleExamples([])
  }
  
  useEffect(() => { 
    generateExamples() 
  }, [])

  return (
    <Box mb="30px">
      <Stack
        sx={{ pt: 4, mb: 5 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <Button variant="contained" 
          sx={{ bgcolor: "#2a8b2c" }}
          onClick={(e) => generateExamples()}
        >Пересоздать</Button>
        <Button variant="outlined"
          component={Link} to="/"
          sx={{ color: "#2a8b2c", borderColor: "#2a8b2c" }}
        >Вернуться</Button>
      </Stack>

      <Stack direction="row" sx={{ gap: { lg: '30px', xs: '20px' } }} flexWrap="wrap" >
        
        {examples.length > 0 && examples.map((example, idx) => (
          <ExampleCard key={idx} example={example} visibleExamples={visibleExamples} setVisibleExamples={setVisibleExamples}/>
        ))}
      </Stack>

    </Box>
  )
}

export default ExampleBlock