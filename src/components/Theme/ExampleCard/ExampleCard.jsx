import React from 'react'
import { Box, Typography, Stack } from '@mui/material';
import { MathComponent } from "mathjax-react";
import styles from './ExampleCard.module.scss'

export default function ExampleCard ({ example, visibleExamples, setVisibleExamples }) {

  console.log('example - ', example)
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
      <Stack direction="row">
        <Typography className={styles.exampleText}>
            <MathComponent tex={example.math} display={false} /> 
        </Typography>

        { example.condition && example.condition.length > 0 &&
        <Typography className={styles.exampleCondition}>
            при <MathComponent
            tex={example.condition}
            display={false}
            />
        </Typography>
        }
      </Stack>
        <Typography className={styles.exampleAnswer}
          sx = {{
            visibility: visibleExamples.includes(example.id) ? 'initial' : 'hidden'
          }}
        >
          Ответ: <MathComponent tex={example.answer} display={false} />
          </Typography>

    </Box>
  )
}

