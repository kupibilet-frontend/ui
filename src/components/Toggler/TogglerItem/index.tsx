import React, { ReactNode, useMemo } from 'react'
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
}

const ENTER_KEY_CODE = 13
const ENTER_KEY = 'Enter'

const isSelectedStatusChange = (prevProps: TProps, nextProps: TProps) => {
  const isSelected = prevProps.value === prevProps.currentValue
  const isSelectedNext = prevProps.value === nextProps.currentValue

  return isSelected === isSelectedNext
}

const TogglerItem = React.memo(({
  children,
  value = '',
  currentValue = '',
  name = '',
  onChange = () => null,
  setFocus = () => null,
  onBlur,
  className = '',
}: TProps): JSX.Element => {
  const isSelected = useMemo(() => value === currentValue, [value, currentValue])

  const renderContent = (): JSX.Element => (
    <StyledWrapper
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
    <ItemWrapper isSelected={isSelected}>
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
}, isSelectedStatusChange)

export default TogglerItem
