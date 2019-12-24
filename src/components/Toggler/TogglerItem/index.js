// @flow
import React from 'react'
import type { Node } from 'react'
import { TogglerContext } from '../TogglerGroup'
import { StyledWrapper, HiddenRadio, ItemWrapper } from './styled'

type Props = {
  children: Node,
  value: string,
}

const TogglerItem = ({
  children,
  value,
}: Props) => (
  <TogglerContext.Consumer>
    {({
      currentValue,
      onChange,
      name,
      setFocus,
      isFocused,
      onBlur,
    }) => {
      const onRadioFocus = () => setFocus(true)
      const onRadioBlur = () => {
        setFocus(false)
        onBlur()
      }
      const isSelected = value === currentValue
      return (
        <ItemWrapper isFocused={isFocused} isSelected={isSelected}>
          <HiddenRadio
            name={name}
            value={value}
            checked={isSelected}
            onClick={(e) => e.stopPropagation()}
            onFocus={onRadioFocus}
            onKeyPress={() => onChange(value)}
            onBlur={onRadioBlur}
          />
          <StyledWrapper
            isSelected={isSelected}
            as="div"
            onClick={() => onChange(value)}
          >
            {children}
          </StyledWrapper>
        </ItemWrapper>
      )
    }}
  </TogglerContext.Consumer>
)

export default TogglerItem
