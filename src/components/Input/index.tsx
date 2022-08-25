import React, { useRef, useState } from 'react'
import { WrappedFieldProps } from 'redux-form'
import { TNeighboringInGroup } from './types'

import {
  InputHint,
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
  className?: string | null,
  readOnly?: boolean,
  'data-test'?: string | null,
  helperText?: React.ReactNode,
}

type TNormalizedProps<T> = Required<TProps<T>>

// Since defaultProps don't work in TypeScript properly, we need to use this helper
function normalizeProps<T>(props: TProps<T>): TNormalizedProps<T> {
  return {
    onChange: props.onChange || (() => null),
    value: props.value || '',
    active: props.active || false,
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
    className: props.className || null,
    readOnly: props.readOnly ?? false,
    'data-test': props['data-test'] || null,
    helperText: props.helperText || '',
  }
}

function renderInputElement<T>(
  normalizedProps: TNormalizedProps<T>,
  handleFocus: (callback: null, event: React.FocusEvent) => void,
  handleBlur: (callback: null, event: React.FocusEvent) => void,
  innerInput: React.RefObject<T>,
): JSX.Element {
  const {
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
    active: reduxFormFieldActive,
    error,
    disabled,
    neighboringInGroup,
    leftIcon,
    rightIcon,
    handleLeftIconPress,
    handleRightIconPress,
    onFocus,
    onBlur,
    innerRef,
    helperText,
  } = normalizedProps
  const [isFocused, setIsFocused] = useState(false)

  const ref = useRef<T>(null)
  const innerInput = innerRef || ref

  const isActive = reduxFormFieldActive || isFocused

  const onIconPress = (event: TIconMouseEvent): void => {
    if (!isFocused) {
      event.preventDefault()

      if (innerInput.current) innerInput.current.focus()
    }
  }

  const handleFocus = (
    onFocusArg: ((event: React.FocusEvent<T>) => void) | null, event: React.FocusEvent<T>,
  ): void => {
    if (onFocus) onFocus(event)
    if (onFocusArg) onFocusArg(event)

    setIsFocused(true)
  }

  const handleBlur = (
    onBlurArg: ((event: React.FocusEvent<T>) => void) | null, event: React.FocusEvent<T>,
  ): void => {
    if (onBlur) onBlur(event)
    if (onBlurArg) onBlurArg(event)

    setIsFocused(false)
  }

  const leftIconsArray = React.Children.toArray(leftIcon)
  const rightIconsArray = React.Children.toArray(rightIcon)

  const isShowError = Boolean(error) && !isActive

  const getHintText = () => {
    if (isShowError) return error
    if (helperText) return helperText
    return ''
  }

  return (
    <div>
      <InputWrapper
        active={isActive}
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
                disabled={disabled}
                left
              >
                {leftIconsArray}
              </IconWrap>
            ) : null
          }
        {
          // @ts-ignore TODO: fix this
          renderInputElement(normalizedProps, handleFocus, handleBlur, innerInput)
        }
        {
          rightIcon ? (
            <IconWrap
              onMouseDown={(
                handleRightIconPress
                  ? (event: TIconMouseEvent) => handleRightIconPress(innerInput, event)
                  : onIconPress
              )}
              disabled={disabled}
              right
            >
              {rightIconsArray}
            </IconWrap>
          ) : null
        }
      </InputWrapper>
      <InputHint error={isShowError} disabled={disabled}>
        { getHintText() }
      </InputHint>
    </div>
  )
}

export type TRFInputProps = WrappedFieldProps & TProps

// ReduxForm wrapper for Input
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
