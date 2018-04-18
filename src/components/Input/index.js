// @flow
import React from 'react'
import ControlsGroup from 'components/ControlsGroup'

/* eslint-disable  react/jsx-no-bind */

import {
  Error,
  InnerInput,
  InputWrapper,
  IconWrap,
  StatusIndicator,
  InnerTextarea,
} from './styled'

export { InnerInput, Error, InputWrapper, IconWrap }

type Props = {
  name: string,
  type?: string,
  active?: boolean,
  error?: boolean | null | string,
  success?: boolean,
  size?: string,
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
  /* global React$Element */
  children?: React$Element<*>[],
  isTextarea?: boolean,
}

type State = {
  isActive: boolean,
}

class InputControl extends React.PureComponent<void, Props, State> {
  static defaultProps = {
    name: 'input',
    size: 'normal',
  }

  state = {
    isActive: false,
  }

  onIconPress = e => {
    if (!this.state.isActive) {
      e.preventDefault()
      this.innerInput.focus()
    }
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
      size,
      success,
      error,
      disabled,
      leftIcon,
      rightIcon,
      isTextarea,
      ...props
    } = this.props

    const InputComponent = isTextarea ? InnerTextarea : InnerInput

    return (
      <InputComponent
        {...props}
        size={size}
        disabled={disabled}
        success={success}
        error={error}
        onFocus={this.handleFocus.bind(null, null)}
        onBlur={this.handleBlur.bind(null, null)}
        innerRef={el => this.innerRef(el)}
        isTextarea={isTextarea}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      />
    )
  }

  render() {
    const {
      active,
      size,
      success,
      error,
      disabled,
      neighboringInGroup,
      children,
      leftIcon,
      rightIcon,
      handleLeftIconPress,
      handleRightIconPress,
      isTextarea,
      ...props
    } = this.props

    const leftIconsArray = React.Children.toArray(leftIcon)
    const rightIconsArray = React.Children.toArray(rightIcon)

    return (
      <InputWrapper
        active={active || this.state.isActive}
        size={size}
        disabled={disabled}
        success={success}
        error={error}
        neighboringInGroup={neighboringInGroup}
        isTextarea={isTextarea}
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
        {children ? (
          <ControlsGroup className="combined-inputs-group">
            {React.Children.map(children, child =>
              React.cloneElement(child, {
                ...props,
                size,
                hasInnerGroup: true,
                onFocus: this.handleFocus.bind(null, child.props.onFocus),
                onBlur: this.handleBlur.bind(null, child.props.onBlur),
              })
            )}
          </ControlsGroup>
        ) : (
          this.renderInputElement()
        )}
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
        <StatusIndicator
          error={error}
          success={success}
          active={active || this.state.isActive}
        />
        {error && <Error>{error}</Error>}
      </InputWrapper>
    )
  }
}

type RFProps = FieldProps

const RFInput = (props: RFProps) => {
  const { input, meta } = props
  return (
    <InputControl
      {...input}
      {...meta}
      {...props}
      error={meta.touched && meta.error}
      success={meta.touched && meta.valid}
    />
  )
}

export { InputControl as Input }

export default RFInput
