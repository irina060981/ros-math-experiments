import * as React from 'react';
import BasicLineChart from '@/components/Charts/BasicLineChart/BasicLineChart';
import { getRandomInt, range } from '@/utility/math-utitility.js'
import { useState } from 'react'
import { Box, Button, Container } from '@mui/material';

export default function LineChart() {

  const [xAxisMin, xAxisMax] = [-10, 10]
  const [yAxisMin, yAxisMax] = [-7, 7]

  const shkala = range(-10, 10, 1)

  let a = getRandomInt(-10, 10, 0);
  let b = getRandomInt(-10, 10, 0);
  let c = getRandomInt(-5, 5, 0);
  let d = ''
  let f = '<'
  {if (b>0) {d='+'}}
  {if (a>b) {f='>'}}
  {if (a===b) {f='='}}

  const xFn = (a) => [a, b]
  const yFn = (b) => [7, -7]

  
  const chartColor = '#fdb462'
  const textLegend = `\\text {Сравните коэффициент (k) линейной функции y=kx+b с нулем}`
  let mathAnswer = `\\text {k${f}0} `

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

