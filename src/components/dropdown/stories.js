import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { boolean } from '@kadira/storybook-addon-knobs'
import updateKnob from '../../utils/updateKnob'
import { Dropdown, Button } from '../../index'

storiesOf('Dropdown', module)
  .addWithInfo('Defalut', () => {
    const isOpen = boolean('isOpen', false)
    const onToggle = (event, value) => {
      event.preventDefault()
      updateKnob('isOpen', 'boolean', value)
    }

    return (
      <Dropdown
        overlay={<div><h2>Tethered</h2></div>}
        onToggle={onToggle}
        isOpen={isOpen}
      >
        <div>
          click to open
          &nbsp;
          <Button>click</Button>
        </div>
      </Dropdown>
    )
  })
