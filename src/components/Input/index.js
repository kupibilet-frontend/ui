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
  error?: string,
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
  rightIconGroup?: React$Element<*>[],
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

  onIconClick = () => {
    this.innerInput.focus()
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
      rightIconGroup,
      ...props
    } = this.props

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
            <IconWrap onClick={this.onIconClick} size={size} left>
              {leftIcon}
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
              rightIconGroup={rightIconGroup}
              size={size}
              disabled={disabled}
              success={success}
              error={error}
              neighboringInGroup={neighboringInGroup}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              innerRef={(el) => this.innerRef(el)}
            />
          )
        }
        {
          rightIcon ? (
            <IconWrap onClick={this.onIconClick} size={size} right>
              {rightIcon}
            </IconWrap>
          ) : (
            null
          )
        }
        {
          rightIconGroup ? (
            <IconWrap onClick={this.onIconClick} size={size} rightGroup>
              {rightIconGroup}
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

export default InputControl
