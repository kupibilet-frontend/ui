// @flow
import React, { PureComponent } from 'react'
import { IconWrap } from 'components/Input'

import {
  StyledInputWrapper,
  StyledError,
  SuccessMessage,
  StyledInnerInput,
} from './styled'

export { SuccessMessage }

type Props = {
  active?: boolean,
  error?: boolean | null | string,
  success?: boolean,
  disabled?: boolean,
  placeholder?: string,
  value?: string,
  neighboringInGroup?: null | 'left' | 'right' | 'both',
  onBlur?: Function,
  onFocus?: Function,
  leftIcon?: React$Element<*>,
  rightIcon?: React$Element<*>,
  handleLeftIconPress?: Function,
  handleRightIconPress?: Function,
  innerRef?: Function,
  size?: string,
}

type State = {
  isActive: boolean,
}

export class RoundInput extends PureComponent<Props, State> {
  state = {
    isActive: false,
  }

  handleFocus = (onFocus, e: Event) => {
    if (this.props.onFocus) this.props.onFocus(e)
    if (onFocus) onFocus(e)
    this.setState({
      isActive: true,
    })
  }

  handleBlur = (onBlur, e: Event) => {
    if (this.props.onBlur) this.props.onBlur(e)
    if (onBlur) onBlur(e)
    this.setState({
      isActive: false,
    })
  }

  innerRef(node) {
    const { innerRef } = this.props
    this.innerInput = node
    if (innerRef) {
      this.props.innerRef(node)
    }
  }

  renderInputElement = () => {
    const {
      disabled,
      leftIcon,
      placeholder,
      rightIcon,
      error,
      success,
      size,
      ...props
    } = this.props

    return (
      <StyledInnerInput
        size={size}
        disabled={disabled}
        error={error}
        success={success}
        onFocus={() => this.handleFocus()}
        onBlur={() => this.handleBlur()}
        innerRef={el => this.innerRef(el)}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        placeholder={placeholder}
        {...props}
      />
    )
  }

  render() {
    const {
      active,
      disabled,
      leftIcon,
      rightIcon,
      handleLeftIconPress,
      handleRightIconPress,
      error,
      success,
      size,
      ...props
    } = this.props

    const leftIconsArray = React.Children.toArray(leftIcon)
    const rightIconsArray = React.Children.toArray(rightIcon)

    return (
      <StyledInputWrapper
        active={active || this.state.isActive}
        size={size}
        success={success}
        error={error}
        disabled={disabled}
        {...props}
      >
        {leftIcon ? (
          <IconWrap
            onMouseDown={
              handleLeftIconPress
                ? e => handleLeftIconPress(this.innerInput, e)
                : this.onIconPress
            }
            size={size}
            isGroup={leftIconsArray.length > 1}
            left
          >
            {leftIconsArray}
          </IconWrap>
        ) : null}
        {this.renderInputElement()}
        {rightIcon ? (
          <IconWrap
            onMouseDown={
              handleRightIconPress
                ? e => handleRightIconPress(this.innerInput, e)
                : this.onIconPress
            }
            size={size}
            isGroup={rightIconsArray.length > 1}
            right
          >
            {rightIconsArray}
          </IconWrap>
        ) : null}
        {error && <StyledError size={size}>{error}</StyledError>}
      </StyledInputWrapper>
    )
  }
}

const RFRoundInput = (props: FieldProps) => {
  const { input, meta } = props
  return (
    <RoundInput
      {...input}
      {...meta}
      {...props}
      error={meta.touched && meta.error}
      success={meta.touched && meta.valid}
    />
  )
}

export default RFRoundInput
