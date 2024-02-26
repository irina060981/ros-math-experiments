import * as React from 'react';
import BasicLineChart from '@/components/Charts/BasicLineChart/BasicLineChart';
import { getRandomInt, range } from '@/utility/math-utitility.js'
import { useState } from 'react'
import { Box, Button, Container } from '@mui/material';

export default function LineChart() {

  const [xAxisMin, xAxisMax] = [-12, 12]
  const [yAxisMin, yAxisMax] = [-9, 9]

  const shkala = range(-12, 12, 1)

  //построение кривой
  let a1 = getRandomInt(-8, -6);
  let a2 = getRandomInt(0, 2);
  let a3 = getRandomInt(6, 9);
  
  let b1 = getRandomInt(-7, 7, 0);
  let b2, b3, b4
  let b5 = getRandomInt(-1, 1);
  let b6 = getRandomInt(-1, 1);
  
  {if (b1>0){ b2 = getRandomInt(-7, -5);} else {b2 = getRandomInt(5, 7)}} 
  {if (b2>0){ b3 = getRandomInt(-7, -5);} else {b3 = getRandomInt(5, 7)}} 
  {if (b3>0){ b4 = getRandomInt(-7, -5);} else {b4 = getRandomInt(5, 2)}} 


  //отбор промежутков возрастания и убвания
  let c1, c2
  let c3=''
  let d1, d2
  let d3=''

  {if (b1>0){ 
    c1=`(-\\infty; ${(-12+a1)/2}] \\cup `, 
    c2=`[${(a1+a2)/2}; ${(a2+a3)/2}]`, 
    c3=`\\cup [${(12+a3)/2};+\\infty)`,
    
    d1= `[${(-12+a1)/2};${(a1+a2)/2}] \\cup`,
    d2= `[${(a2+a3)/2};${(12+a3)/2}]`

  } else {
    d1=`(-\\infty; ${(-12+a1)/2}] \\cup `, 
    d2=`[${(a1+a2)/2}; ${(a2+a3)/2}]`, 
    d3=`\\cup [${(12+a3)/2};+\\infty)`,
    
    c1= `[${(-12+a1)/2};${(a1+a2)/2}] \\cup `,
    c2= `[${(a2+a3)/2};${(12+a3)/2}]`
  }
}
//сценарий исключения первого промежутка
  {if (b1==b6 && b1>0) {c1=``}}
  {if (b1==b6 && b1<0) {d1=``}}

  const xFn = (a) => [-12, (-12+a1)/2, a1, (a1+a2)/2, a2, (a2+a3)/2, a3, (12+a3)/2, 12]
  const yFn = (b) => [b6, b1, 0, b2, 0, b3, 0, b4 ,b5]
  
  const chartColor = '#fdb462'
  const textLegend = `\\text {Назовите промежутки возрастания и убывания функции}`
  let mathAnswer = `\\text {Возрастает } ${c1}${c2}${c3} \\text { Убывает } ${d1}${d2}${d3}`

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

