import React, { ReactNode } from 'react'
import {
  StyledWrapper,
  HiddenRadio,
  ItemWrapper,
} from './styled'

type TValue = string | number

type TProps = {
  children: ReactNode,
  value?: TValue,
  currentValue?: TValue,
  onChange?: (value: TValue) => void,
  name?: string,
  setFocus?: (isFocused: boolean) => void,
  onBlur?: () => void,
  className?: string,
  hasDelimiter?: boolean,
}

const ENTER_KEY_CODE = 13
const ENTER_KEY = 'Enter'

const TogglerItem = ({
  children,
  value = '',
  currentValue = '',
  name = '',
  onChange = () => null,
  setFocus = () => null,
  onBlur,
  className = '',
  hasDelimiter = true,
  ...props
}: TProps): JSX.Element => {
  const isSelected = value === currentValue

  const renderContent = (): JSX.Element => (
    <StyledWrapper
      {...props}
      isSelected={isSelected}
      as="div"
      onClick={() => onChange(value)}
      className={className}
    >
      {children}
    </StyledWrapper>
  )

  const onFocusHandler = (): void => {
    if (setFocus) setFocus(true)
  }

  const onBlurHandler = (): void => {
    if (setFocus && onBlur) {
      setFocus(false)
      onBlur()
    }
  }

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const isEnterKeyDown = event.key === ENTER_KEY || event.keyCode === ENTER_KEY_CODE
    if (isEnterKeyDown) {
      onChange(value)
    }
  }

  return (
    <ItemWrapper
      isSelected={isSelected}
      hasDelimiter={hasDelimiter}
    >
      <HiddenRadio
        name={name}
        value={value}
        checked={isSelected}
        onClick={(e) => e.stopPropagation()}
        onFocus={onFocusHandler}
        onKeyDown={onKeyDownHandler}
        onBlur={onBlurHandler}
        // to remove react warning
        onChange={() => null}
      />
      {renderContent()}
    </ItemWrapper>
  )
}

export default TogglerItem
