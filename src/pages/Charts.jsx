import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'


export default function BasicLineChart() {

//массив для шкалы осей
  const shkala  = [];
  for (let i = -10; i<= 10; i++){
    shkala.push(i);
    }

let a = getRandomInt(-4, 4);
let b = getRandomInt(-6, 2);

    //построение графика 
    //Ответ: y=\\left(x+${a}\\right)^2+${b}
  return (
    <LineChart
      xAxis={[{ data: [a-4, a-3, a-2,  a-1, a, a+1, a+2,  a+3,  a+4],  max: 7, min: -7, tickInterval: shkala}
    ]}

      yAxis={[
        { id: 'linearAxis', scaleType: 'linear', max: 7, min: -7, tickInterval: shkala}
    ]}


      series={[
        {
          data: [b+16, b+9, b+4,  b+1, b, b+1, b+4, b+9, b+16],
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