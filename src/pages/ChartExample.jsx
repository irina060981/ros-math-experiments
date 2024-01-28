import * as React from 'react';
import { useParams } from 'react-router';
import { useClassC } from '@/contexts/classContext';

import Chart1 from '@/components/Charts/Examples/Chart1';
import Chart2 from '@/components/Charts/Examples/Chart2';

export default function ChartExample() {
    const { classId, chartId } = useParams()
    const { classC } = useClassC();
    
    const chartName = classC.getChartName(classId, chartId)
    console.log('chartName', chartName)
    return (
      <>
        { (chartName === 'Chart1') && <Chart1 /> }
        { (chartName === 'Chart2') && <Chart2 /> }
      </>
    )
}