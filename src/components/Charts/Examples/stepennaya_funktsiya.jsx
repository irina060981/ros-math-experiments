import * as React from 'react';
import BasicLineChart from '@/components/Charts/BasicLineChart/BasicLineChart';
import { getRandomInt, range } from '@/utility/math-utitility.js'
import { useState } from 'react'
import { Box, Button, Container } from '@mui/material';

export default function LineChart() {

  const [xAxisMin, xAxisMax] = [-7, 7]
  const [yAxisMin, yAxisMax] = [-6, 6]

  const shkala = range(-10, 10, 1)


  let a = getRandomInt(2, 10)
  let b = getRandomInt(2, 5)
  let c = '+'
  let d = ''
  let f = '>'
  let t = ''
  let m = ''
  {if (a%2===0) (f='<', m='0<')}
  {if (a%2===0) (a=b/10)}
  
  const xFn = (a) => [-2, -1, 0, 1, 2, 3, 4]
  const yFn = (b) => [(a)**(-2), (a)**(-1), 1, a, (a)**2, (a)**3, (a)**4]

  const chartColor = '#fdb462'
  const textLegend = `\\text {Сравните основание степенной функции } y={a}^{x} \\text{ с единицей}`
  let mathAnswer = `${m}a${f}1`

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

