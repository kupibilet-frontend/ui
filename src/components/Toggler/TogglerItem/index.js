// @flow
import React from 'react'
import type { Node } from 'react'
import { TogglerContext } from '../TogglerGroup'
import { StyledWrapper, HiddenRadio, ItemWrapper } from './styled'

type Props = {
  children: Node,
  value: string,
}

const ENTER_KEY_CODE = 13

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
      const onFocusHendler = () => setFocus(true)
      const onBlurHendler = () => {
        setFocus(false)
        onBlur()
      }
      const onKeyDownHendler = (e) => {
        if (e.keyCode === ENTER_KEY_CODE) {
          onChange(value)
        }
      }
      const isSelected = value === currentValue

      return (
        <ItemWrapper isFocused={isFocused} isSelected={isSelected}>
          <HiddenRadio
            name={name}
            value={value}
            checked={isSelected}
            onClick={(e) => e.stopPropagation()}
            onFocus={onFocusHendler}
            onKeyDown={onKeyDownHendler}
            onBlur={() => onBlurHendler()}
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
