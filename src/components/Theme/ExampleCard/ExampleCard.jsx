import React from 'react'
import { Box, Typography, Stack } from '@mui/material';
import { MathJax, MathJaxContext } from "better-react-mathjax"
import styles from './ExampleCard.module.scss'

export default function ExampleCard ({ example, visibleExamples, setVisibleExamples }) {
  const clickExample = () => {
    if (!visibleExamples.includes(example.id)) {
      const localExamples = [...visibleExamples]
      localExamples.push(example.id)
      setVisibleExamples(localExamples)
    }
  }


  return (
    <Box className={styles.cardBox}
      onClick={(e) => clickExample()}
    >
      <MathJax hideUntilTypeset={"first"}
            inline
            dynamic
          >
      <Stack direction="row">
        
        <Typography className={styles.exampleText}>
          {`\\(${example.math}\\)`}
        </Typography>

        { example.condition && example.condition.length > 0 &&
        <Typography className={styles.exampleCondition}>
             {`\\(\\text{при }${example.condition}\\)`}
        </Typography>
        }
      </Stack>
        <Typography className={styles.exampleAnswer}
          sx = {{
            visibility: visibleExamples.includes(example.id) ? 'initial' : 'hidden'
          }}
        >
             {`\\(\\text{Ответ: }${example.answer}\\)`}
          </Typography>
      </MathJax> 
    </Box>
  )
}

