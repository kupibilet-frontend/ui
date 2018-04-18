import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'
import Dropdown, { DropdownContent } from 'components/Dropdown'
import Button from 'components/Button'

const StyledDropdown = styled(Dropdown)`
  ${DropdownContent} {
    left: auto;
    width: 300px;
  }
`

storiesOf('Complex controls/Dropdown', module).addWithInfo('Defalut', () => {
  const isOpen = boolean('isOpen', false)
  const onToggle = (event, value) => {
    event.preventDefault()
    updateKnob('isOpen', 'boolean', value)
  }

  return (
    <StyledDropdown
      overlay={
        <div>
          <h2>Tethered</h2>
        </div>
      }
      onToggle={onToggle}
      isOpen={isOpen}
    >
      <div>
        click to open &nbsp;
        <Button>click</Button>
      </div>
    </StyledDropdown>
  )
})
