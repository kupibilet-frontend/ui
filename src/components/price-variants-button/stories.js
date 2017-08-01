import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import PriceVariantsButton from './index'
import updateKnob from '../../utils/updateKnob'

const defaultChecked = {
  title: 'Эконом Базовый',
  description: 'Описание',
  price: '12 234 ₽',
  topIcon: ['plane'],
  bottomIcon: ['hand-baggage', 'exchange', 'return'],
  active: false,
}

storiesOf('PriceVariantsButton', module)
  .addWithInfo('default', () => {
    const title = text('title', defaultChecked.title)
    const description = text('description', defaultChecked.description)
    const price = text('price', defaultChecked.price)
    const active = boolean('active', defaultChecked.active)
    const onClick = (flag) => {
      updateKnob('active', 'boolean', flag)
    }

    return (
      <div>
        <PriceVariantsButton
          active={!active}
          title="Банковской картой он-лайн"
          price={price}
          iconsPosition="top"
          icons={defaultChecked.topIcon}
          description={description}
          onClick={onClick}
        />
        <PriceVariantsButton
          active={active}
          title={title}
          price={price}
          iconsPosition="bottom"
          icons={defaultChecked.bottomIcon}
          description={description}
          onClick={onClick}
        />
        <PriceVariantsButton
          active={active}
          title="Эконом"
          price={price}
          iconsPosition="bottom"
          icons={defaultChecked.bottomIcon}
          description={description}
          onClick={onClick}
        />
      </div>
    )
  })
