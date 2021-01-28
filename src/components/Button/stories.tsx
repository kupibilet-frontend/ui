import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'

import Button from 'components/Button'
import Icon from 'components/Icon'

import { TButtonVariant, BUTTON_SIZES_NAMES } from './types'

const sizesSelect = (defaultValue = 'normal') => select(
  'size',
  {
    small: BUTTON_SIZES_NAMES.small,
    normal: BUTTON_SIZES_NAMES.normal,
    large: BUTTON_SIZES_NAMES.large,
  },
  defaultValue,
)

const variantsSelect = (defaultValue = 'primary') => select(
  'variant',
  [
    'primary',
    'secondary',
  ],
  defaultValue,
)

storiesOf('COMPONENTS|Controls/Buttons', module)
  .add('Default', () => (
    <Button
      size={sizesSelect() as BUTTON_SIZES_NAMES}
      disabled={boolean('disabled', false)}
      variant={variantsSelect() as TButtonVariant}
    >
      {text('text', 'Авиабилеты')}
    </Button>
  ))
  .add('With custom icons', () => (
    <Button
      size={sizesSelect() as BUTTON_SIZES_NAMES}
      disabled={boolean('disabled', false)}
      variant={variantsSelect() as TButtonVariant}
      leftIcon={
        <Icon name="plane" inheritColor />
      }
      rightIcon={
        <Icon name="hand-baggage" inheritColor />
      }
    >
      {text('text', 'Авиабилеты')}
    </Button>
  ))
  .add('With left and right icons', () => (
    <Button
      size={sizesSelect() as BUTTON_SIZES_NAMES}
      disabled={boolean('disabled', false)}
      variant={variantsSelect() as TButtonVariant}
      leftIcon="hand-baggage"
      rightIcon="plane"
    >
      {text('text', 'Авиабилеты')}
    </Button>
  ))
  .add('Icon-only button (custom icon)', () => (
    <Button
      size={sizesSelect() as BUTTON_SIZES_NAMES}
      disabled={boolean('disabled', false)}
      variant={variantsSelect() as TButtonVariant}
      icon={
        <Icon name="carrot_monochrome" inheritColor />
      }
    />
  ))
  .add('Loading button', () => (
    <Button
      size={sizesSelect() as BUTTON_SIZES_NAMES}
      disabled={boolean('disabled', false)}
      variant={variantsSelect() as TButtonVariant}
      icon="spinner"
    />
  ))
  .add('Icon-only button', () => (
    <Button
      size={sizesSelect() as BUTTON_SIZES_NAMES}
      disabled={boolean('disabled', false)}
      variant={variantsSelect() as TButtonVariant}
      icon="carrot_monochrome"
    />
  ))
  .add('Button as <a href="" />', () => (
    <Button
      size={sizesSelect() as BUTTON_SIZES_NAMES}
      disabled={boolean('disabled', false)}
      variant={variantsSelect() as TButtonVariant}
      href="/"
      target="_blank"
    >
      {text('text', 'Авиабилеты')}
    </Button>
  ))
