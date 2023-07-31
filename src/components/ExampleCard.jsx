import React from 'react'
import { Box, Typography, Stack } from '@mui/material';
import { MathComponent } from "mathjax-react";

const ExampleCard = ({ example, visibleExamples, setVisibleExamples }) => {
  const clickExample = () => {
    if (!visibleExamples.includes(example.id)) {
      const localExamples = [...visibleExamples]
      localExamples.push(example.id)
      setVisibleExamples(localExamples)
    }
  }

  return (
    <Box 
      sx={{
        p: "20px", border: "1px solid #ddd", borderRadius: "20px",
        cursor: "pointer"
      }}
      onClick={(e) => clickExample()}
    >
      <Stack direction="row">
        <Typography textAlign="left" fontWeight="bold" mb="20px">
            <MathComponent tex={example.math} display={false} /> 
        </Typography>
        { example.condition && example.condition.length > 0 &&
        <Typography textAlign="left" mb="20px" ml="10px" color="#888888">
            при <MathComponent
            tex={example.condition}
            display={false}
            />
        </Typography>
        }
      </Stack>
        <Typography textAlign="left" color="#2a8b2c"
          sx = {{
            visibility: visibleExamples.includes(example.id) ? 'initial' : 'hidden'
          }}
        >
          Ответ: <MathComponent tex={example.answer} display={false} />
          </Typography>

    </Box>
  )
}

export default ExampleCard