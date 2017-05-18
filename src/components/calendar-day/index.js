// @flow
import React from 'react'
import type moment$Moment from 'moment'
import { Day, AvgCost } from './styled'

type Props = {
  day: moment$Moment,
  isCheap?: boolean,
  cost?: number,
}

/* eslint-disable react/prop-types */
export default class DayCell extends React.PureComponent<void, Props, void> {
  render() {
    const { day, isCheap, cost } = this.props

    return (
      <Day>
        { day.format('D') }
        { cost &&
          <AvgCost isCheap={isCheap}>
            { cost.toLocaleString() }
          </AvgCost>
        }
      </Day>
    )
  }
}
