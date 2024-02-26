import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { getRandomInt, range } from '@/utility/math-utitility.js'
import { useState, useEffect } from 'react'
import { Box, Typography, Stack, Button } from '@mui/material';
import { MathJax, MathJaxContext } from "better-react-mathjax"
import styles from './BasicLineChart.module.scss'

export default function BasicLineChart({ xAxisMin, xAxisMax, yAxisMin, yAxisMax, shkala, 
                                         a, b,
                                         xMinAdd, xMaxAdd, yMinAdd, yMaxAdd, 
                                         yFn, xFn, chartColor, rebuildFlag,
                                         textLegend, mathAnswer
                                        }) {

    const chartColorLocal = chartColor ?? '#fdb462'                                        
    const [xData, setXData] = useState([])
    const [seriesData, setSeriesData] = useState([])
    const [showAnswerFlag, setshowAnswerFlag] = useState(false)
  
    const generateChart = () => {
      setshowAnswerFlag(false)
      const xAdd = setXData(xFn(a))
      const yAdd = setSeriesData(yFn(b))
    }
  
    useEffect(() => { 
      generateChart() 
    }, [rebuildFlag])
  
    const showAnswer = () => setshowAnswerFlag(true)
      //построение графика 
      //Ответ: y=\\left(x+${a}\\right)^2+${b}
    return (
      <>

      <Stack className={styles.legendBox}>  
        <MathJax hideUntilTypeset={"first"}
          dynamic
        >
          <Typography textAlign='center' >
              {`\\(${textLegend}\\)`}
          </Typography>

          <Typography 
            sx = {{
              visibility: showAnswerFlag ? 'initial' : 'hidden'
            }}
          >
              {`\\(\\text{Ответ: }${mathAnswer}\\)`}
            </Typography>
          </MathJax> 
            <Box >              
                  <Button variant="contained"
                          onClick={(e) => showAnswer()}
                  >
                      Показать ответ
                  </Button>
            </Box>
          
        </Stack>  

        <LineChart
          xAxis={[{ data: xData,  max: xAxisMax, min: xAxisMin, tickInterval: shkala}
        ]}
    
          yAxis={[
            { id: 'linearAxis', scaleType: 'linear', max: yAxisMax, min: yAxisMin, tickInterval: shkala}
        ]}
    
    
          series={[
            {
              data: seriesData,
              showMark: false, color: chartColorLocal
            },
          ]}
          width={1000}
          height={850}
          axisHighlight={{x: 'none', y: 'none'}}
          sx={{
            'g.MuiChartsAxis-directionY': {
                transform: 'translate(50%,0)'
            },
            
            'g.MuiChartsAxis-directionX': {
                transform: 'translate(0, 50%)'
            }
        }}
          disableAxisListener
    
            slotProps={{
                legend: {
                  direction: 'row',
                  position: { vertical: 'top', horizontal: 'middle' },
                  padding: 0,
                }
            }}
    
            tooltip={{ trigger: 'none' }}
    
    
        />
      
    </>
    );
} 