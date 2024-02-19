import * as React from 'react';
import { useParams } from 'react-router';
import { useClassC } from '@/contexts/classContext';

import Chart1 from '@/components/Charts/Examples/parabola';
import Chart2 from '@/components/Charts/Examples/lineinaya_k';
import Chart3 from '@/components/Charts/Examples/vozrastaniya_ubyvaniya';
import Chart4 from '@/components/Charts/Examples/nuli_funktsii';
import Chart5 from '@/components/Charts/Examples/giperbola';
import Chart6 from '@/components/Charts/Examples/stepennaya_funktsiya';

export default function ChartExample() {
    const { classId, chartId } = useParams()
    const { classC } = useClassC();
    
    const chartName = classC.getChartName(classId, chartId)
    console.log('chartName', chartName)
    return (
      <>
        { (chartName === 'parabola') && <Chart1 /> }
        { (chartName === 'lineinaya_k') && <Chart2 /> }
        { (chartName === 'vozrastaniya_ubyvaniya') && <Chart3 /> }
        { (chartName === 'nuli_funktsii') && <Chart4 /> }
        { (chartName === 'giperbola') && <Chart5 /> }
        { (chartName === 'stepennaya_funktsiya') && <Chart6 /> }
       
      </>
    )
}