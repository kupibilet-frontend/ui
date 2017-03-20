import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text, select } from '@kadira/storybook-addon-knobs'

import Button from './index'
import Icon from '../icons'

const sizesSelect = (defaultValue = 'large') => select(
  'size',
  {
    small: 'Small',
    normal: 'Normal',
    large: 'Large',
  },
  defaultValue,
)

storiesOf('Buttons', module)
  .addWithInfo('Default', () => (
    <Button>
      { text('text', 'Авиабилеты') }
    </Button>
  ))
  .addWithInfo('Sizes', () => (
    <Button
      size={sizesSelect()}
    >
      { text('text', 'Бальшой') }
    </Button>
  ))
  .addWithInfo('With icons', () => (
    <Button
      size={sizesSelect('normal')}
      leftIcon={
        <Icon name="plane" stroke="background" fill="background" />
      }
      rightIcon={
        <Icon name="hand-baggage" fill="background" />
      }
    >
      {
        text('text', 'Авиабилеты')
      }</Button>
  ))
  .addWithInfo('Icon-only button', () => (
    <Button
      size={sizesSelect()}
      icon={
        <Icon name="carrot_monochrome" fill="background" />
      }
    />
  ))
  .addWithInfo('Disabled', () => (
    <Button disabled>
      { text('text', 'Cake is a lie') }
    </Button>
  ))
