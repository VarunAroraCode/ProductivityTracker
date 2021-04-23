import React from 'react'
import { Chart } from 'react-charts'
import whatInput from 'what-input'
 
function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Time Range',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7],[5, 4], [6, 6], [7, 9], [8, 2], [9, 4],[10, 1], [11, 5], [12, 5], [13, 3], [14, 2],[15, 5], [16, 9], [17, 12], [18, 13], [19, 11],[20, 5], [21, 1], [22, 1], [23, 1], [24, 4]]
      },
      {
        label: 'Activity',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4],[5, 3], [6, 1], [7, 5], [8, 6], [9, 4],[10, 3], [11, 1], [12, 5], [13, 6], [14, 4],[15, 3], [16, 1], [17, 5], [18, 6], [19, 4],[20, 3], [21, 1], [22, 5], [23, 6], [24, 4]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  return (
    <div
      style={{
        width: '800px',
        height: '600px'
      }}
      
    >
      <Chart data={data} axes={axes} />
    </div>
  )
}
export default MyChart
