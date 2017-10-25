// @flow
import React from 'react'
import ControlsGroup from 'components/ControlsGroup'

import {
  Error,
  InnerInput,
  InputWrapper,
  IconWrap,
} from './styled'

export { InnerInput, Error }

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

  onIconPress = (e) => {
    if (!this.state.isActive) {
      e.preventDefault()
      this.innerInput.focus()
    }
  }

  handleFocus = (e: Event) => {
    const { onFocus } = this.props
    if (onFocus) onFocus(e)
    this.setState({
      isActive: true,
    })
  }

  handleBlur = (e: Event) => {
    const { onBlur } = this.props
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
      >
        {
          leftIcon ? (
            <IconWrap
              onMouseDown={handleLeftIconPress
                ? (e) => handleLeftIconPress(this.innerInput, e)
                : this.onIconPress
              }
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
              { React.Children.map(children, (child) => (
                React.cloneElement(child, {
                  ...props,
                  size,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                })
              )) }
            </ControlsGroup>
          ) : (
            <InnerInput
              {...props}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              size={size}
              disabled={disabled}
              success={success}
              error={error}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              innerRef={(el) => this.innerRef(el)}
            />
          )
        }
        {
          rightIcon ? (
            <IconWrap
              onMouseDown={handleRightIconPress
                ? (e) => handleRightIconPress(this.innerInput, e)
                : this.onIconPress
              }
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

        { error && <Error>
          { error }
        </Error>
        }
      </InputWrapper>
    )
  }
}

type RFProps = FieldProps

const RFInput = (props : RFProps) => {
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

export {
  InputControl as Input,
}

export default RFInput
