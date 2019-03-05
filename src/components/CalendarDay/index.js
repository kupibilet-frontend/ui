// @flow
import React, { PureComponent } from 'react'
import type moment$Moment from '@kupibilet/moment'
import { Day, AvgCost } from './styled'
import createE2EId from '../../utils/createE2EId'

type Props = {
  day: moment$Moment,
  isCheap?: boolean,
  cost?: number,
  namespace: string,
}

/* eslint-disable react/prop-types */
export default class DayCell extends PureComponent<Props, void> {
  static defaultProps = {
    isCheap: false,
    cost: null,
  }

  render() {
    const { day, isCheap, cost, namespace } = this.props
    const valueDay = day.format('D')
    const testIdDate = day.format('DD.MM.YYYY')
    const month = day.format('M')
    return (
      <Day {...createE2EId(`${namespace}.day`, { day: valueDay, month, fulldate: testIdDate, cost })}>
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
