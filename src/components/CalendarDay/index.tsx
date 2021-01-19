import React from 'react'
import { Day, AvgCost } from './styled'

interface TProps {
  day: { format: (arg: string) => string },
  isCheap?: boolean,
  cost?: number | null,
}

const DayCell = React.memo((props: TProps) => {
  const { day, isCheap = false, cost = null } = props

  return (
    <Day>
      { day.format('D') }
      {cost ? (
        <AvgCost isCheap={isCheap}>
          { cost.toLocaleString(['ru', 'en-US']) }
        </AvgCost>
      ) : null}
    </Day>
  )
})

export default DayCell
