import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'

import Button from 'components/Button'
import Icon from 'components/Icon'

const sizesSelect = (defaultValue = 'normal') =>
  select(
    'size',
    {
      small: 'Small',
      normal: 'Normal',
      large: 'Large',
    },
    defaultValue
  )
const variantsSelect = (defaultValue = 'primary') =>
  select('variant', ['primary', 'secondary'], defaultValue)

storiesOf('Controls/Buttons', module)
  .addWithInfo('Default', () => (
    <Button
      size={sizesSelect()}
      disabled={boolean('disabled', false)}
      variant={variantsSelect()}
    >
      {text('text', 'Авиабилеты')}
    </Button>
  ))
  .addWithInfo('With custom icons', () => (
    <Button
      size={sizesSelect()}
      disabled={boolean('disabled', false)}
      variant={variantsSelect()}
      leftIcon={<Icon name="plane" inheritColor />}
      rightIcon={<Icon name="hand-baggage" inheritColor />}
    >
      {text('text', 'Авиабилеты')}
    </Button>
  ))
  .addWithInfo('With left and right icons', () => (
    <Button
      size={sizesSelect()}
      disabled={boolean('disabled', false)}
      variant={variantsSelect()}
      leftIcon="hand-baggage"
      rightIcon="plane"
    >
      {
        text('text', 'Авиабилеты')
      }</Button>
  ))
  .addWithInfo('Icon-only button (custom icon)', () => (
    <Button
      size={sizesSelect('large')}
      disabled={boolean('disabled', false)}
      variant={variantsSelect()}
      icon={<Icon name="carrot_monochrome" inheritColor />}
    />
  ))
  .addWithInfo('Icon-only button', () => (
    <Button
      size={sizesSelect('large')}
      disabled={boolean('disabled', false)}
      variant={variantsSelect()}
      icon="carrot_monochrome"
    />
  ))
  .addWithInfo('Button with component <a>', () => (
    <Button
      size={sizesSelect()}
      disabled={boolean('disabled', false)}
      variant={variantsSelect()}
      href="/"
      target="_blank"
    >
      {text('text', 'Авиабилеты')}
    </Button>
  ))
