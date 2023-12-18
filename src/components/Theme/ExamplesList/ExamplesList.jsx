import React, { useState, useEffect } from 'react'
import { Box, Stack, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

import { useClassC } from '@/contexts/classContext';

import styles from './ExamplesList.module.scss'

import ExampleCard from '@/components/Theme/ExampleCard/ExampleCard'

export default function ExamplesList({classId, themeId}) {
    const { classC } = useClassC();
    const examplesFn = classC.getExamplesItem(classId, themeId);

    console.log('examplesFn - ', examplesFn)

    const [ examples, setExamples ] = useState([])
    const [ visibleExamples, setVisibleExamples ] = useState([])

    const generateExamples = () => {
        const localExamples = examplesFn.fn()
        setExamples(localExamples)
        setVisibleExamples([])
    }

    useEffect(() => { 
        generateExamples() 
    }, [])

    return (
    <Box className={styles.container}>
        <Container maxWidth="lg">
        <Box className={styles.cardsBox}>
            <Stack spacing={2} className={styles.cardsBoxButtonsContainer} direction="row">
                
                <Button className={styles.buttonRecreate} variant="contained"
                        onClick={(e) => generateExamples()}
                >
                    Пересоздать
                </Button>

                <Button className={styles.buttonReturn} variant="outlined" 
                        component={Link} to={`/class/${classId}`}
                >
                    Вернуться
                </Button>

            </Stack>

            <Stack className={styles.examplesBox} direction="row">
                
                {examples.length > 0 && examples.map((example, idx) => (
                    <ExampleCard 
                        key={idx} example={example} 
                        visibleExamples={visibleExamples} 
                        setVisibleExamples={setVisibleExamples}
                    />
                ))}
            </Stack>

            </Box>
        </Container>
    </Box>
    )
  }