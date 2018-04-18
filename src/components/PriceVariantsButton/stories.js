import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import PriceVariantsButton from 'components/PriceVariantsButton'
import updateKnob from 'storybook/updateKnob'

const defaultValues = {
  title: 'Эконом Базовый',
  description: 'Описание',
  price: '12 234',
  topIcons: ['plane'],
  bottomIcons: ['hand-baggage', 'exchange', 'return'],
  active: 1,
  strikedIcons: [
    {
      name: 'hand-baggage',
      striked: false,
    },
    {
      name: 'exchange',
      striked: true,
    },
    {
      name: 'return',
      striked: true,
    },
  ],
}

const onClick = index => updateKnob('active', 'number', index)

/* eslint-disable react/jsx-no-bind */
storiesOf('Complex controls/PriceVariantsButton', module).addWithInfo(
  'default',
  () => {
    const title = text('title', defaultValues.title)
    const description = text('description', defaultValues.description)
    const price = text('price', defaultValues.price)
    const active = number('active', defaultValues.active)

    return (
      <div>
        <PriceVariantsButton
          active={active === 1}
          title="Банковской картой он-лайн"
          price={price}
          iconsPosition="top"
          icons={defaultValues.topIcons}
          description={description}
          onChange={onClick.bind(null, 1)}
        />
        <PriceVariantsButton
          active={active === 2}
          title={title}
          price={price}
          iconsPosition="bottom"
          icons={defaultValues.bottomIcons}
          description={description}
          onChange={onClick.bind(null, 2)}
        />
        <PriceVariantsButton
          active={active === 3}
          title="Эконом"
          price={price}
          iconsPosition="bottom"
          icons={defaultValues.strikedIcons}
          description={description}
          onChange={onClick.bind(null, 3)}
        />
      </div>
    )
  }
)
