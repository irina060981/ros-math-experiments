import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'


export default function BasicLineChart() {

//массив для шкалы осей
  const shkala  = [];
  for (let i = -10; i<= 10; i++){
    shkala.push(i);
    }

let a = getRandomInt(-5, 5, 0);
let b = getRandomInt(-5, 5, 0);
let c = getRandomInt(-5, 5, 0);

    //построение графика 
    //Ответ: зависит от задания y=${a}x+${b} или просто ${a} или просто ${a}, ${b} 
  
  return (
    <LineChart
      xAxis={[{ data: [c-14, 0, c, c+14],  max: 7, min: -7, tickInterval: shkala}
    ]} //c-14 беру чтобы график строился на всей плоскости координат

      yAxis={[
        { id: 'linearAxis', scaleType: 'linear', max: 7, min: -7, tickInterval: shkala}
    ]}


      series={[
        {
          data: [a*(c-14)+b, b, a*c+b, a*(c+14)+b],
          showMark: false, color: '#fdb462'
        },
      ]}
      width={1000}
      height={850}
      axisHighlight={'none'}
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
  );
}