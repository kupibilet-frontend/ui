import React, { ReactNode, useMemo } from 'react'
import Tooltip from 'components/Tooltip'
import { TVariant } from '../TogglerGroup'
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
  variant?: TVariant,
  tooltipContent?: string | ReactNode,
}

const ENTER_KEY_CODE = 13

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
  variant = 'primary',
  onChange = () => null,
  setFocus = () => null,
  onBlur,
  tooltipContent = null,
}: TProps) => {
  const isSelected = useMemo(() => value === currentValue, [value, currentValue])

  const renderContent = (): ReactNode => (
    <StyledWrapper
      isSelected={isSelected}
      as="div"
      onClick={() => onChange(value)}
      variant={variant}
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
    const keyCode = event.key || event.keyCode
    if (keyCode === ENTER_KEY_CODE) {
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
      {tooltipContent ? (
        <Tooltip align="bottom" content={tooltipContent}>
          {renderContent()}
        </Tooltip>
      ) : renderContent()}
    </ItemWrapper>
  )
}, isSelectedStatusChange)

export default TogglerItem
