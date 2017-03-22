import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text, boolean } from '@kadira/storybook-addon-knobs'
import updateKnob from '../../utils/updateKnob'

import Checkbox from './index'

storiesOf('Checkbox', module)
  .addWithInfo('default', () => {
    const checked = boolean('checked', false)

    return (
      <Checkbox
        checked={checked}
        onChange={() => updateKnob('checked', 'boolean', !checked)}
      >
        { text('text', 'Авиабилеты') }
      </Checkbox>
    )
  })
  .addWithInfo('disabled', () => {
    const checked = boolean('checked', false)
    const disabled = boolean('disabled', true)

    return (
      <Checkbox
        checked={checked}
        disabled={disabled}
        onChange={() => updateKnob('checked', 'boolean', !checked)}
      >
        { text('text', 'Авиабилеты') }
      </Checkbox>
    )
  })
