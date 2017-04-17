import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text } from '@kadira/storybook-addon-knobs'
import BlockChecked from './index'

const defaultChecked = {
  title: 'Эконом Базовый',
  price: '12 234 ₽',
  topIcon: ['plane'],
  bottomIcon: ['hand-baggage', 'exchange', 'return'],
}

storiesOf('BlockChecked', module)
  .addWithInfo('default', () => {
    const title = text('title', defaultChecked.title)
    const price = text('price', defaultChecked.price)

    return (
      <div>
        <BlockChecked
          forName={'name1'}
          nameInput={'radio1'}
          title={'Банковской картой он-лайн'}
          price={price}
          topIcon={defaultChecked.topIcon}
          bottomIcon={defaultChecked.bottomIcon}
        />
        <BlockChecked
          forName={'name2'}
          nameInput={'radio1'}
          title={title}
          price={price}
          topIcon={defaultChecked.topIcon}
          bottomIcon={defaultChecked.bottomIcon}
        />
      </div>
    )
  })
