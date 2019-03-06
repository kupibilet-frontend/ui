// @flow
import React from 'react'
import type moment$Moment from '@kupibilet/moment'
import { Day, AvgCost } from './styled'
import createTestId from '../../utils/createTestId'

type Props = {
  day: moment$Moment,
  isCheap?: boolean,
  cost?: number,
  namespace: string,
}

/* eslint-disable react/prop-types */
export default class DayCell extends React.PureComponent<void, Props, void> {
  render() {
    const { day, isCheap, cost, namespace } = this.props

    return (
      <Day {...createTestId(`${namespace}.day`, {day: day.format('D'), cost: cost })}>
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
