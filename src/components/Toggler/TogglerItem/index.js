// @flow
import React from 'react'
import type { Node } from 'react'
import { TogglerContext } from '../TogglerGroup'
import { BorderedWrapper, ColoredWrapper } from './styled'

type Props = {
  children: Node,
  value: string,
}

const TogglerItem = ({
  children,
  value,
}: Props) => (
  <TogglerContext.Consumer>
    {({ currentValue, onChange }) => {
      const isSelected = value === currentValue

      return (
        <BorderedWrapper
          isSelected={isSelected}
          onClick={() => onChange(value)}
        >
          <ColoredWrapper isSelected={isSelected}>
            {children}
          </ColoredWrapper>
        </BorderedWrapper>
      )
    }}
  </TogglerContext.Consumer>
)

export default TogglerItem
