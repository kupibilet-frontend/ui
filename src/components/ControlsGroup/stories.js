import React from 'react'
import { storiesOf } from '@storybook/react'

import { text } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'

import AirportInput from 'components/AirportInput'
import Button from 'components/Button'
import ControlsGroup from 'components/ControlsGroup'

/* eslint-disable no-console */
storiesOf('Complex controls/ControlsGroup', module)
  .addWithInfo('Inputs group', () => (
    <ControlsGroup onSwap={() => console.log('Swap it!')}>
      <AirportInput readOnly value="Шереметьево" city="Москва" IATACode="SVO" />
      <AirportInput
        value={text('value', 'Несуществующий город')}
        onChange={({ target }) => updateKnob('value', 'text', target.value)}
      />
    </ControlsGroup>
  ))
  .addWithInfo('Different controls group', () => (
    <ControlsGroup>
      <Button size="large">Пойти</Button>
      <AirportInput readOnly value="Шереметьево" city="Москва" IATACode="SVO" />
      <Button size="large">Найти</Button>
    </ControlsGroup>
  ))
