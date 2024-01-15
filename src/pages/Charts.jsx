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
  let b = getRandomInt(-6, 2, 0)
  let c = ''
  let d = ''
  

  const [ xMinAdd, xMaxAdd ] = [-4, 4]
  const [ yMinAdd, yMaxAdd ] = [0, 4]
  const yFn = (b, arrY) => arrY.map(y => b+y*y)

  {if (a>0){c='+'}}
  {if (b>0){d='+'}}
  const chartColor = '#fdb462'
  const textLegend = 'что-то на русском'
  let mathLegend = `y=\\left(x${c}${a}\\right)^{2}${d}${b}`

    //построение графика 
    //Ответ: y=\\left(x+${a}\\right)^2+${b}

/*не могу сюда добавить перевернутую параболу. Ранее строилась по такому алгоритму:
   xAxis={[{ data: [a-4, a-3, a-2,  a-1, a, a+1, a+2,  a+3,  a+4],  max: 7, min: -7, tickInterval: shkala}
    data: [b+16, b+9, b+4,  b+1, b, b+1, b+4, b+9, b+16],

   Нужно такое:
  let t
  {if (a>-3) {t = getRandomInt(-1, 1, 0)} else {t=1}} 
   xAxis={[{ data: [a-4, a-3, a-2,  a-1, a, a+1, a+2,  a+3,  a+4],  max: 7, min: -7, tickInterval: shkala}
   data: [b+16*t, b+9*t, b+4*t,  b+1*t, b, b+1*t, b+4*t, b+9*t, b+16*t],
*/

  const [rebuildFlag, setRebuildFlag] = useState(1)

  const generateCharts = () => {
    setRebuildFlag((a) => a+1)

    a = getRandomInt(-4, 4)
    b = getRandomInt(-6, 2)
    mathLegend = `y=\\left(x${c}${a}\\right)^2${d}${b}`
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

