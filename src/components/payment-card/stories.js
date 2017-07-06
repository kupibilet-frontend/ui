import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'

import PaymentCard from './index'

const valueSelect = (defaultValue = 4083971122223333) => select(
  'value',
  {
    4083971122223333: 'alfabank',
    6761961122223333: 'sberbank',
    4377731122223333: 'tinkoff',
    4188691122223333: 'vtb24',
    5335951122223333: 'sovkombank',
    5203061122223333: 'citibank',
    4693951122223333: 'qiwi',
    4565151122223333: 'trust',
    9999888877776666: 'default',
  },
  defaultValue,
)

storiesOf('PaymentCard', module)
  .addWithInfo('card', () => {
    const noBack = boolean('noBack', false)

    return (
      <div>
        <PaymentCard
          value={valueSelect()}
          owner="Foo Bar"
          expiryDate={new Date('12 Aug 2021')}
          noBack={noBack}
        />
      </div>
    )
  })
