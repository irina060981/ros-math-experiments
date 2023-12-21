import * as React from 'react';
import BasicLineChart from '@/components/Charts/BasicLineChart/BasicLineChart';
import { getRandomInt, range } from '@/utility/math-utitility.js'
import { useState } from 'react'
import { Box, Button, Container } from '@mui/material';

export default function LineChart() {
  const [xAxisMin, xAxisMax] = [-7, 7]
  const [yAxisMin, yAxisMax] = [-7, 7]

  const shkala = range(-10, 10, 1)

  let a = getRandomInt(-4, 4)
  let b = getRandomInt(-6, 2)

  const [ xMinAdd, xMaxAdd ] = [-4, 4]
  const [ yMinAdd, yMaxAdd ] = [0, 4]
  const yFn = (b, arrY) => arrY.map(y => b+y*y)

  const chartColor = '#fdb462'
  const textLegend = 'что-то на русском'
  let mathLegend = `y=\\left(x+${a}\\right)^2+${b}`

    //построение графика 
    //Ответ: y=\\left(x+${a}\\right)^2+${b}

  const [rebuildFlag, setRebuildFlag] = useState(1)

  const generateCharts = () => {
    setRebuildFlag((a) => a+1)

    a = getRandomInt(-4, 4)
    b = getRandomInt(-6, 2)
    mathLegend = `y=\\left(x+${a}\\right)^2+${b}`
  }
  
  return (
    <Box >
        <Container maxWidth="lg">
        <Box >              
                <Button variant="contained"
                        onClick={(e) => generateCharts()}
                >
                    Пересоздать
                </Button>
        </Box>
        </Container>
      
      <BasicLineChart 
        xAxisMin = {xAxisMin} xAxisMax = {xAxisMax}
        yAxisMin = {yAxisMin} yAxisMax = {yAxisMax}
        shkala = {shkala}

        a = {a} b={b}

        xMinAdd = {xMinAdd} xMaxAdd = {xMaxAdd}
        yMinAdd = {yMinAdd} yMaxAdd = {yMaxAdd}

        yFn = {yFn}

        chartColor = {chartColor}
        rebuildFlag = {rebuildFlag}
        textLegend = {textLegend}
        mathLegend = {mathLegend}
      />
    </Box>


  );
}