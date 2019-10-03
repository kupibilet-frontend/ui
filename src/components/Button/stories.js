import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'

import Button from 'components/Button'
import Icon from 'components/Icon'

const sizesSelect = (defaultValue = 'normal') => select(
  'size',
  {
    small: 'small',
    normal: 'normal',
    large: 'large',
  },
  defaultValue,
)
const variantsSelect = (defaultValue = 'primary') => select(
  'variant',
  [
    'primary',
    'secondary',
    'link',
  ],
  defaultValue,
)

storiesOf('COMPONENTS|Controls/Buttons', module)
  .add('Default', () => (
    <Button
      size={sizesSelect()}
      disabled={boolean('disabled', false)}
      variant={variantsSelect()}
    >
      { text('text', 'Авиабилеты') }
    </Button>
  ))
  .add('With custom icons', () => (
    <Button
      size={sizesSelect()}
      disabled={boolean('disabled', false)}
      variant={variantsSelect()}
      leftIcon={
        <Icon name="plane" inheritColor />
      }
      rightIcon={
        <Icon name="hand-baggage" inheritColor />
      }
    >
      {
        text('text', 'Авиабилеты')
      }
    </Button>
  ))
  .add('With left and right icons', () => (
    <Button
      size={sizesSelect()}
      disabled={boolean('disabled', false)}
      variant={variantsSelect()}
      leftIcon="hand-baggage"
      rightIcon="plane"
    >
      {
        text('text', 'Авиабилеты')
      }
    </Button>
  ))
  .add('Icon-only button (custom icon)', () => (
    <Button
      size={sizesSelect('large')}
      disabled={boolean('disabled', false)}
      variant={variantsSelect()}
      icon={
        <Icon name="carrot_monochrome" inheritColor />
      }
    />
  ))
  .add('Loading button', () => (
    <Button
      size={sizesSelect('large')}
      disabled={boolean('disabled', false)}
      variant={variantsSelect()}
      icon="spinner"
    />
  ))
  .add('Icon-only button', () => (
    <Button
      size={sizesSelect('large')}
      disabled={boolean('disabled', false)}
      variant={variantsSelect()}
      icon="carrot_monochrome"
    />
  ))
  .add('Button as <a href="" />', () => (
    <Button
      size={sizesSelect()}
      disabled={boolean('disabled', false)}
      variant={variantsSelect()}
      href="/"
      target="_blank"

    >
      { text('text', 'Авиабилеты') }
    </Button>
  ))
