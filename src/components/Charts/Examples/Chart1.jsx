import * as React from 'react';
import BasicLineChart from '@/components/Charts/BasicLineChart/BasicLineChart';
import { getRandomInt, range } from '@/utility/math-utitility.js'
import { useState } from 'react'
import { Box, Button, Container } from '@mui/material';

export default function LineChart() {

  const [xAxisMin, xAxisMax] = [-10, 10]
  const [yAxisMin, yAxisMax] = [-7, 7]

  const shkala = range(-10, 10, 1)

  let a = getRandomInt(-4, 4, 0)
  let b = getRandomInt(-6, 6, 0)
  let c = '+'
  let d = ''
  let f = 1
  let t
  {if (-3<=b<=3) {t = getRandomInt(-1, 1, 0)}}
  {if (b>=4) {t = -1}}
  {if (b<=-4) {t = 1}}

  const xFn = (a) => [a-4, a-3, a-2,  a-1, a, a+1, a+2,  a+3,  a+4]
  const yFn = (b) => [b+16*t, b+9*t, b+4*t,  b+1*t, b, b+1*t, b+4*t, b+9*t, b+16*t]

  {if (a>0){c='-'} else {f=-1}}
  {if (b>0){d='+'}}
  
  const chartColor = '#fdb462'
  const textLegend = `\\text {Задайте формулой вида }\\ y=\\left(x+b\\right)^{2}+c\\ \\text { функцию, график которой изображен на рисунке}`
  let mathAnswer = `\\text {Ответ: } y=\\left(x${c}${a*f}\\right)^{2}${d}${b}`

  const [rebuildFlag, setRebuildFlag] = useState(1)

  const generateCharts = () => {
    setRebuildFlag((a) => a+1)

    a = getRandomInt(-4, 4)
    b = getRandomInt(-6, 2)
    mathAnswer = `y=\\left(x${c}${a}\\right)^2${d}${b}`
  }
  
  return (
    <Box >
        <Container maxWidth="lg">
        <Box >              
                <Button variant="contained"
                        onClick={(e) => generateCharts()}
                >
                    Пересоздать график
                </Button>
        </Box>
        </Container>
      
      <BasicLineChart 
        xAxisMin = {xAxisMin} xAxisMax = {xAxisMax}
        yAxisMin = {yAxisMin} yAxisMax = {yAxisMax}
        shkala = {shkala}

        a = {a} b={b}

        xFn = {xFn}
        yFn = {yFn}

        chartColor = {chartColor}
        rebuildFlag = {rebuildFlag}
        textLegend = {textLegend}
        mathAnswer = {mathAnswer}
        
      />
    </Box>

  );
}

