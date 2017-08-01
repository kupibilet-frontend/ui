import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import updateKnob from 'utils/updateKnob'

import Checkbox from 'components/Checkbox'

storiesOf('Checkbox', module)
  .addWithInfo('default', () => {
    const checked = boolean('checked', false)

    return (
      <div>
        <Checkbox
          checked={checked}
          onChange={() => updateKnob('checked', 'boolean', !checked)}
        >
          { text('text', 'Авиабилеты') }
        </Checkbox>
      </div>
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
