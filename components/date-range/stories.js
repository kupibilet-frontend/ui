import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text } from '@kadira/storybook-addon-knobs'

import styled from 'styled-components'

import DateRange from './index'

const AvgCost = styled.div`
  font-size: 11px;
  color: #b3b3b3;
  letter-spacing: .5px;
  line-height: 1;
  text-align: center;
`

const DayCell = ({day}) => (
  <span>
    { day.format('D') }
    <AvgCost>
      { Math.random() * 99999 | 0 }
    </AvgCost>
  </span>
)

storiesOf('DateRange', module).addWithInfo(
  'DateRange',
  `
    description
  `,
  () => (
    <DateRange
      renderDay={day => (<DayCell day={day} />)}
    />
  ),
)
