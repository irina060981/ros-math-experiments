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
  let b5 = 0;
  let b6 = 0;
  
  {if (b1>0){ b2 = getRandomInt(-7, -5);} else {b2 = getRandomInt(5, 7)}} 
  {if (b2>0){ b3 = getRandomInt(-7, -5);} else {b3 = getRandomInt(5, 7)}} 
  {if (b3>0){ b4 = getRandomInt(-7, -5);} else {b4 = getRandomInt(5, 2)}} 

  const xFn = (a) => [-12, (-12+a1)/2, a1, (a1+a2)/2, a2, (a2+a3)/2, a3, (12+a3)/2, 12]
  const yFn = (b) => [b6, b1, 0, b2, 0, b3, 0, b4 ,b5]
  
  const chartColor = '#fdb462'
  const textLegend = `\\text {Назовите нули функции}`
  let mathAnswer = `(-12; 0), (${a1};0), (${a2};0), (${a3};0), (12;0),`

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

