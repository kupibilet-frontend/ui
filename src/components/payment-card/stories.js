import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import updateKnob from '../../utils/updateKnob'

import PaymentCard from './index'

storiesOf('PaymentCard', module)
  .addWithInfo('default', () => {
    // const checked = boolean('checked', false)

    return (
      <div>
        <PaymentCard
          value={4083971122223333}
        >
          { text('text', 'Авиабилеты') }
        </PaymentCard>
      </div>
    )
  })
