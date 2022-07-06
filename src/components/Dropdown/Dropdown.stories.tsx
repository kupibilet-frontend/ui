import React from 'react'
import styled from 'styled-components'

import DropdownWrap, { Dropdown, TProps } from 'components/Dropdown'
import Button from 'components/Button'
import { useArgs } from '@storybook/client-api'

const CustomDropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 150px;
  border: 1px solid ${({ theme }) => theme.color.misc500};
  background-color: ${({ theme }) => theme.color.background};
  padding: 10px;
`

export const Default = (args: TProps): JSX.Element => {
  const [{ isOpen }, updateArgs] = useArgs()

  const handleToggle = (): void => {
    updateArgs({ isOpen: !isOpen })
  }

  return (
    <DropdownWrap
      overlay={<div>Dropdown content</div>}
      onToggle={handleToggle}
      isOpen={isOpen}
    >
      <Button>Open Dropdown</Button>
    </DropdownWrap>
  )
}

export const WithCustomDropdownContainer = (args: TProps): JSX.Element => {
  const [{ isOpen }, updateArgs] = useArgs()

  const handleToggle = (): void => {
    updateArgs({ isOpen: !isOpen })
  }

  return (
    <DropdownWrap
      overlay={<div>Dropdown content</div>}
      onToggle={handleToggle}
      isOpen={isOpen}
      renderDropdownContainer={(children) => (
        <CustomDropdownContainer>
          {children}
        </CustomDropdownContainer>
      )}
    >
      <Button>Click to open Dropdown</Button>
    </DropdownWrap>
  )
}

export default {
  title: 'Dropdown',
  component: Dropdown,
}
