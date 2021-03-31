import React, { useRef, useState } from 'react'
import { WrappedFieldProps } from 'redux-form'
import ControlsGroup from 'components/ControlsGroup'
import { TNeighboringInGroup, TInputSize } from './types'

import {
  Error,
  InnerInput,
  InputWrapper,
  IconWrap,
  InnerTextarea,
} from './styled'


type TIconMouseEvent = React.MouseEvent<Element, MouseEvent>

type TIconPressHandlerProp = ((
  element: HTMLElement | React.RefObject<HTMLElement>,
  event: TIconMouseEvent
) => void) | null

export interface TProps<THTMLElement = HTMLInputElement | HTMLTextAreaElement> {
  onChange?: (event: React.ChangeEvent<THTMLElement>) => void,
  value?: string,
  name?: string,
  type?: string,
  active?: boolean,
  error?: React.ReactNode,
  size?: TInputSize,
  disabled?: boolean,
  placeholder?: string,
  neighboringInGroup?: TNeighboringInGroup,
  onBlur?: (event: React.FocusEvent<THTMLElement>) => void,
  onFocus?: (event: React.FocusEvent<THTMLElement>) => void,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  handleLeftIconPress?: TIconPressHandlerProp,
  handleRightIconPress?: TIconPressHandlerProp,
  innerRef?: React.RefObject<THTMLElement> | null,
  children?: React.ReactElement[] | null,
  isTextarea?: boolean,
  rows?: number,
  autoComplete?: 'no' | null,
}

type TNormalizedProps<T> = Required<TProps<T>>

// Since defaultProps don't work in TypeScript properly, we need to use this helper
function normalizeProps<T>(props: TProps<T>): TNormalizedProps<T> {
  return {
    onChange: props.onChange || (() => null),
    value: props.value || '',
    active: props.active || false,
    size: props.size || 'normal',
    type: props.type || 'text',
    name: props.name || 'input',
    error: props.error || false,
    disabled: props.disabled || false,
    neighboringInGroup: props.neighboringInGroup ? props.neighboringInGroup : null,
    children: props.children || null,
    leftIcon: props.leftIcon || null,
    rightIcon: props.rightIcon || null,
    handleLeftIconPress: props.handleLeftIconPress || null,
    handleRightIconPress: props.handleRightIconPress || null,
    isTextarea: props.isTextarea || false,
    placeholder: props.placeholder || '',
    onBlur: props.onBlur || (() => null),
    onFocus: props.onFocus || (() => null),
    innerRef: props.innerRef || null,
    rows: props.rows || 0,
    autoComplete: props.autoComplete || null,
  }
}

function renderInputElement<T>(
  normalizedProps: TNormalizedProps<T>,
  handleFocus: (callback: null, event: React.FocusEvent) => void,
  handleBlur: (callback: null, event: React.FocusEvent) => void,
  innerInput: React.RefObject<T>,
): JSX.Element {
  const {
    size,
    error = false,
    disabled = false,
    leftIcon,
    rightIcon,
    isTextarea,
    ...props
  } = normalizedProps

  if (isTextarea) {
    return (
      <InnerTextarea
        {...props}
        inputSize={size}
        disabled={disabled}
        error={Boolean(error)}
        onFocus={(event: React.FocusEvent<HTMLTextAreaElement>) => handleFocus(null, event)}
        onBlur={(event: React.FocusEvent<HTMLTextAreaElement>) => handleBlur(null, event)}
        // @ts-ignore TODO: fix ts with React refs
        ref={innerInput}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        as="textarea"
      />
    )
  }

  return (
    <InnerInput
      {...props}
      inputSize={size}
      disabled={disabled}
      error={Boolean(error)}
      onFocus={(event: React.FocusEvent<HTMLInputElement>) => handleFocus(null, event)}
      onBlur={(event: React.FocusEvent<HTMLInputElement>) => handleBlur(null, event)}
        // @ts-ignore TODO: fix ts with React refs
      ref={innerInput}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    />
  )
}


function InputControl<T extends HTMLElement>(props: TProps<T>): JSX.Element {
  const normalizedProps = normalizeProps(props)
  const {
    active,
    size,
    error,
    disabled,
    neighboringInGroup,
    children,
    leftIcon,
    rightIcon,
    handleLeftIconPress,
    handleRightIconPress,
    onFocus,
    onBlur,
    innerRef,
    autoComplete,
  } = normalizedProps
  const [isActive, setIsActive] = useState<boolean>(false)
  const innerInput = innerRef || useRef<T>(null)

  const onIconPress = (event: TIconMouseEvent): void => {
    if (!isActive) {
      event.preventDefault()

      if (innerInput.current) innerInput.current.focus()
    }
  }

  const handleFocus = (
    onFocusArg: ((event: React.FocusEvent<T>) => void) | null, event: React.FocusEvent<T>,
  ): void => {
    if (onFocus) onFocus(event)
    if (onFocusArg) onFocusArg(event)

    setIsActive(true)
  }

  const handleBlur = (
    onBlurArg: ((event: React.FocusEvent<T>) => void) | null, event: React.FocusEvent<T>,
  ): void => {
    if (onBlur) onBlur(event)
    if (onBlurArg) onBlurArg(event)

    setIsActive(false)
  }

  const leftIconsArray = React.Children.toArray(leftIcon)
  const rightIconsArray = React.Children.toArray(rightIcon)

  return (
    <InputWrapper
      active={active || isActive}
      disabled={disabled}
      error={Boolean(error)}
      neighboringInGroup={neighboringInGroup}
    >
      {
          leftIcon ? (
            <IconWrap
              onMouseDown={(
                handleLeftIconPress
                  ? (event: TIconMouseEvent) => handleLeftIconPress(innerInput, event)
                  : onIconPress
              )}
              size={size}
              isGroup={leftIconsArray.length > 1}
              left
            >
              {leftIconsArray}
            </IconWrap>
          ) : (
            null
          )
        }
      {
          children ? (
            <ControlsGroup className="combined-inputs-group">
              {React.Children.map(children, (child: React.ReactElement) => (
                React.cloneElement(child, {
                  autoComplete,
                  inputSize: size,
                  name: child.props.name,
                  hasInnerGroup: true,
                  onFocus: (event: React.FocusEvent<T>) => handleFocus(child.props.onFocus, event),
                  onBlur: (event: React.FocusEvent<T>) => handleBlur(child.props.onBlur, event),
                })
              ))}
            </ControlsGroup>
          ) : (
            // @ts-ignore TODO: fix this
            renderInputElement(normalizedProps, handleFocus, handleBlur, innerInput)
          )
        }
      {
          rightIcon ? (
            <IconWrap
              onMouseDown={(
                handleRightIconPress
                  ? (event: TIconMouseEvent) => handleRightIconPress(innerInput, event)
                  : onIconPress
              )}
              size={size}
              isGroup={rightIconsArray.length > 1}
              right
            >
              {rightIconsArray}
            </IconWrap>
          ) : (
            null
          )
        }
      { error && !active && (
      <Error>
        { error }
      </Error>
      )}
    </InputWrapper>
  )
}

export type TRFInputProps = WrappedFieldProps & TProps

const RFInput = ({ input, meta, ...props }: TRFInputProps): JSX.Element => (
  <InputControl
    {...input}
    {...meta}
    {...props}
    error={meta.touched && meta.error}
  />
)

export {
  InputControl as Input,
}

export default RFInput
