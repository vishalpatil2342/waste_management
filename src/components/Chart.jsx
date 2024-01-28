import React from 'react'
import { BarChart } from '@mantine/charts';

export const data = [
  { month: 'January',  Collect: 900, Recycle: 200 },
  { month: 'February', Collect: 1200, Recycle: 400 },
  { month: 'March', Collect: 1000, Recycle: 200 },
  { month: 'April', Collect: 200, Recycle: 800 },
  { month: 'May', Collect: 1400, Recycle: 1200 },
  { month: 'June', Collect: 600, Recycle: 1000 },
];

const Chart = () => {
  return (
    <div>
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Collect', color: 'blue.6' },
        { name: 'Recycle', color: 'teal.6' },
      ]}
      tickLine="y"
      />
      
    </div>
  )
}

export default Chart