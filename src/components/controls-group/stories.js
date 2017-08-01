import React from 'react'
import { storiesOf } from '@storybook/react'

import { text } from '@storybook/addon-knobs'
import updateKnob from 'utils/updateKnob'

import AirportInput from 'components/airport-input'
import Button from 'components/button'
import ControlsGroup from 'components/controls-group'

/* eslint-disable no-console */
storiesOf('ControlsGroup', module)
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
      <Button size="large">
        Пойти
      </Button>
      <AirportInput readOnly value="Шереметьево" city="Москва" IATACode="SVO" />
      <Button size="large">
        Найти
      </Button>
    </ControlsGroup>
  ))
