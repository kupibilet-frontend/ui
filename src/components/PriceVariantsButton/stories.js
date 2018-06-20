import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'
import PriceVariantsButton from 'components/PriceVariantsButton'
import Icon from 'components/Icon'
import updateKnob from 'storybook/updateKnob'

const defaultValues = {
  title: 'Эконом Базовый',
  description: 'Описание',
  price: '12 234',
  topIcons: ['plane'],
  bottomIcons: [
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
  active: 1,
}

const Item = styled.div`
  display: inline-flex;
  margin-left: 12px;
`

const IconWrap = styled.span`
  margin-left: 6px;
`

const onClick = (index) => updateKnob('active', 'number', index)

const renderTopIcons = () => defaultValues.topIcons.map((icon) => (
  <Icon
    key={icon}
    name={icon}
    fill="miscDark"
  />
))

const renderBottomIcons = () => defaultValues.bottomIcons.map((icon) => (
  <IconWrap key={icon.name}>
    <Icon
      name={icon.name}
      striked={icon.striked}
      fill="miscDark"
    />
  </IconWrap>
))

/* eslint-disable react/jsx-no-bind */
storiesOf('Complex controls/PriceVariantsButton', module)
  .addWithInfo('default', () => {
    const title = text('title', defaultValues.title)
    const description = text('description', defaultValues.description)
    const price = text('price', defaultValues.price)
    const active = number('active', defaultValues.active)

    return (
      <div>
        <Item>
          <PriceVariantsButton
            active={active === 1}
            title="Банковской картой он-лайн"
            price={price}
            iconsPosition="top"
            icons={renderTopIcons()}
            description={description}
            onChange={onClick.bind(null, 1)}
            disabled={boolean('disabled', false)}
          />
        </Item>
        <Item>
          <PriceVariantsButton
            active={active === 2}
            title={title}
            price={price}
            iconsPosition="bottom"
            icons={renderBottomIcons()}
            description={description}
            onChange={onClick.bind(null, 2)}
            disabled={boolean('disabled', false)}
          />
        </Item>
        <Item>
          <PriceVariantsButton
            active={active === 3}
            title="Эконом"
            price={price}
            iconsPosition="bottom"
            icons={renderBottomIcons()}
            description={description}
            onChange={onClick.bind(null, 3)}
            disabled={boolean('disabled', false)}
          />
        </Item>
      </div>
    )
  })
