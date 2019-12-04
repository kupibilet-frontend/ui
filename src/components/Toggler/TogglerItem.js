// @flow
import React from 'react'
import type { Node } from 'react'
import styled from 'styled-components'
import { TogglerContext } from './TogglerGroup'

type Props = {
  children: Node,
  value: string,
}

const ItemWrapper = styled.div`
  padding: 10px;
  border: 1px solid black;
  background: ${({ isSelected }) => (isSelected ? 'blue' : 'white')};
  cursor: pointer;
`

const TogglerItem = ({
  children,
  value,
}: Props) => (
  <TogglerContext.Consumer>
    {({ currentValue, onChange }) => (
      <ItemWrapper
        isSelected={value === currentValue}
        onClick={() => onChange(value)}
      >
        {children}
      </ItemWrapper>
    )}
  </TogglerContext.Consumer>
)

export default TogglerItem
