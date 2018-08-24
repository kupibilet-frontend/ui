// @flow
import React from 'react'
import type moment$Moment from '@kupibilet/moment'
import { Day, AvgCost } from './styled'

type Props = {
  day: moment$Moment,
  isCheap?: boolean,
  cost?: number,
}

/* eslint-disable react/prop-types */
export default class DayCell extends React.PureComponent<void, Props, void> {
  render() {
    const { day, isCheap, cost, showPrice } = this.props

    return (
      <Day>
        { day.format('D') }
        {
          (cost && showPrice) ? (
            <AvgCost isCheap={isCheap}>
              { cost.toLocaleString(['ru', 'en-US']) }
            </AvgCost>
          ) : (
            <AvgCost>&nbsp;</AvgCost>
          )
        }
      </Day>
    )
  }
}
