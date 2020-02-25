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

const CustomDropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 150px;
  border: 1px solid ${({ theme }) => theme.color.miscDark};
  background-color: ${({ theme }) => theme.color.background};
  padding: 10px;
`

storiesOf('COMPONENTS|Complex controls/Dropdown', module)
  .add('Defalut', () => {
    const isOpen = boolean('isOpen', false)
    const onToggle = (event, value) => {
      event.preventDefault()
      updateKnob('isOpen', 'boolean', value)
    }

    return (
      <StyledDropdown
        overlay={<div>Dropdown content</div>}
        onToggle={onToggle}
        isOpen={isOpen}
      >
        <Button>Open Dropdown</Button>
      </StyledDropdown>
    )
  })
  .add('With custom Dropdown container', () => {
    const isOpen = boolean('isOpen', false)
    const onToggle = (event, value) => {
      event.preventDefault()
      updateKnob('isOpen', 'boolean', value)
    }

    return (
      <StyledDropdown
        overlay={<div>Dropdown content</div>}
        onToggle={onToggle}
        isOpen={isOpen}
        renderDropdownContainer={(children) => (
          <CustomDropdownContainer>
            {children}
          </CustomDropdownContainer>
        )}
      >
        <Button>Click to open Dropdown</Button>
      </StyledDropdown>
    )
  })
