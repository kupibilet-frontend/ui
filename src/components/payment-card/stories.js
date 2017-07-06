import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import PaymentCard from './index'

storiesOf('PaymentCard', module)
  .addWithInfo('sberbank', () => {
    // const checked = boolean('checked', false)

    return (
      <div>
        <PaymentCard
          value={6761961122223333}
          owner={'Foo Bar Baz'}
          expiryDate={new Date('12 Aug 2021')}
        />
      </div>
    )
  })
  .addWithInfo('alfabank', () => {
    // const checked = boolean('checked', false)

    return (
      <div>
        <PaymentCard
          value={4083971122223333}
          owner={'Foo Bar Baz'}
          expiryDate={new Date('12 Aug 2021')}
        />
      </div>
    )
  })
  .addWithInfo('tinkoff', () => {
    // const checked = boolean('checked', false)

    return (
      <div>
        <PaymentCard
          value={4377731122223333}
          owner={'Foo Bar Baz'}
          expiryDate={new Date('13 Aug 2021')}
        />
      </div>
    )
  })
  .addWithInfo('vtb24', () => {
    // const checked = boolean('checked', false)

    return (
      <div>
        <PaymentCard
          value={4188691122223333}
          owner={'Foo Bar Baz'}
          expiryDate={new Date('13 Aug 2021')}
        />
      </div>
    )
  })
  .addWithInfo('sovkombank', () => {
    // const checked = boolean('checked', false)

    return (
      <div>
        <PaymentCard
          value={5335951122223333}
          owner={'Foo Bar Baz'}
          expiryDate={new Date('13 Aug 2021')}
        />
      </div>
    )
  })
  .addWithInfo('citibank', () => {
    // const checked = boolean('checked', false)

    return (
      <div>
        <PaymentCard
          value={5203061122223333}
          owner={'Foo Bar Baz'}
          expiryDate={new Date('13 Aug 2021')}
        />
      </div>
    )
  })
  .addWithInfo('qiwi', () => {
    // const checked = boolean('checked', false)

    return (
      <div>
        <PaymentCard
          value={4693951122223333}
          owner={'Foo Bar Baz'}
          expiryDate={new Date('13 Aug 2021')}
        />
      </div>
    )
  })
  .addWithInfo('trust', () => {
    // const checked = boolean('checked', false)

    return (
      <div>
        <PaymentCard
          value={4565151122223333}
          owner={'Foo Bar Baz'}
          expiryDate={new Date('13 Aug 2021')}
        />
      </div>
    )
  })
  .addWithInfo('default', () => {
    // const checked = boolean('checked', false)

    return (
      <div>
        <PaymentCard
          value={9999888877776666}
          owner={'Foo Bar Baz'}
          expiryDate={new Date('13 Aug 2021')}
        />
      </div>
    )
  })
