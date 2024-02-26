import * as React from 'react';
import BasicLineChart from '@/components/Charts/BasicLineChart/BasicLineChart';
import { getRandomInt, range } from '@/utility/math-utitility.js'
import { useState } from 'react'
import { Box, Button, Container } from '@mui/material';

export default function LineChart() {

  const [xAxisMin, xAxisMax] = [-10, 10]
  const [yAxisMin, yAxisMax] = [-7, 7]

  const shkala = range(-10, 10, 1)
  
  let a = getRandomInt(-10, 10, 0)
  let b = getRandomInt(-6, 6, 0)
  let e = '' 
  let t  

  const xFn = (a) => [-1/10, -1/8, -1/3, -0.5, -1, -2, -3, -4, -6, -8, -10, 0, 1/10, 1/8, 1/3, 0.5, 1, 2, 3, 4, 6, 8, 10]
  const yFn = (b) => [a*(-10), a*(-8), a*(-3), a*(-2), a/(-1), a/(-2), a/(-3), a/(-4), a/(-6), a/(-8), a/(-10), null, a*(10), a*(8), a*(3), a*(2), a/(1), a/(2), a/(3), a/(4), a/(6), a/(8), a/(10)]
  
  {if (a<0) {t=a*(-1), e='-'} else {t=a}}
  const chartColor = '#fdb462'
  const textLegend = `\\text {Сравните коэффициент (k) обратной пропорциональности } y=\\frac{k}{x} \\text{ с нулем}`
  let mathAnswer = `y=${e}\\frac{${t}}{x}`

  const [rebuildFlag, setRebuildFlag] = useState(1)

  const generateCharts = () => {
    setRebuildFlag((a) => a+1)
  }
  
  return (
    <Box >

        <Box className="legendBox">              
                <Button variant="contained"
                        onClick={(e) => generateCharts()}
                >
                    Пересоздать график
                </Button>
        </Box>

      
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

