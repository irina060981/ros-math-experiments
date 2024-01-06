import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { Battery20Rounded } from '@mui/icons-material';


export default function BasicLineChart() {

//массив для шкалы осей
  const shkala  = [];
  for (let i = -12; i<= 12; i++){
    shkala.push(i);
    }

let a1 = getRandomInt(-8, -6);
let a2 = getRandomInt(0, 2);
let a3 = getRandomInt(6, 9);

let b1 = getRandomInt(-7, 7, 0);
let b2, b3, b4
let b5 = getRandomInt(-2, 2);
let b6 = getRandomInt(-2, 2);

{if (b1>0){ b2 = getRandomInt(-7, -5);} else {b2 = getRandomInt(5, 7)}} 
{if (b2>0){ b3 = getRandomInt(-7, -5);} else {b3 = getRandomInt(5, 7)}} 
{if (b3>0){ b4 = getRandomInt(-7, -5);} else {b4 = getRandomInt(5, 2)}} 
    //построение графика произвольная кривая
    //Ответ: зависит от задания. обычно это промежуток вида [-12; (-12+a1)/2]
  
  return (
    <LineChart
      xAxis={[{ data: [-12, (-12+a1)/2, a1, (a1+a2)/2, a2, (a2+a3)/2, a3, (12+a3)/2, 12] ,  max: 12, min: -12, tickInterval: shkala}
    ]}

      yAxis={[
        { id: 'linearAxis', scaleType: 'linear', max: 10, min: -10, tickInterval: shkala}
    ]}


      series={[
        {
          data: [b6, b1, 0, b2, 0, b3, 0, b4 ,b5],
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