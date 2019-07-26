// @flow
import React, { PureComponent } from 'react'
import type moment$Moment from '@kupibilet/moment'
import { Day, AvgCost } from './styled'

type Props = {
  day: moment$Moment,
  isCheap?: boolean,
  cost?: number,
}

/* eslint-disable react/prop-types */
export default class DayCell extends PureComponent<Props, void> {
  static defaultProps = {
    isCheap: false,
    cost: null,
  }

  render() {
    const { day, isCheap, cost } = this.props

    return (
      <Day>
        { day.format('D') }
        {
          cost ? (
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
