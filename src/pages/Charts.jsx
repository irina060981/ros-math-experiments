import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

export default function Charts() {
    const chartFn = (a, b, c) => {
      const xC = -b/2*a
      const xCord = []
      const yCord = []

      for(let x = xC-15; x<=xC+15; x++) {
        xCord.push(x)
        yCord.push(a*x*x + b*x + c)
      }

      return { xCord, yCord }
    }

    /*
    const xCord = [1, 2, 3, 5, 8, 10]
    const yCord = [2, 5.5, 2, 8.5, 1.5, 5]
    */

    const a = 1
    const b = 2
    const c = -50

    const { xCord, yCord } = chartFn(a, b, c)

    return (
      <>

      <LineChart
        xAxis={[{ data: xCord }]}
        yAxis={[
            { id: 'linearAxis', scaleType: 'linear' },
          ]}
        series={[
            {
            data: yCord, showMark: false, color: '#fdb462',
            label: `y = a*x*x + b*x + c, где a=${a}, b=${b}, c=${c}`
            },
        ]}
        width={500}
        height={300}
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
      </>
    )
  }
  