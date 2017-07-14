import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { switchTransition } from '../../utils/transitions'
import { borderSmall } from '../../utils/borders'

const borderInput = (props) => {
  const { active, theme, disabled } = props
  if (active) {
    return `border-color: ${theme.color.primary};`
  } else if (disabled) {
    return `border-color: ${theme.color.miscLightest};`
  }
  return `border-color: ${theme.color.misc};`
}

const SIZE = {
  large: 14,
  normal: 11,
  small: 8,
}

const TYPOGRAPHY = {
  large: 18,
  normal: 16,
  small: 16,
}

const getInputHeight = (size) => {
  if (size === 'large') {
    return '42px'
  } else if (size === 'normal') {
    return '36px'
  }
  return '30px'
}

const Error = styled.span`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  ${borderSmall};
  opacity: 0.97;
  z-index: 2;
  padding: 3px 12px 5px;
  background-color: ${({ theme }) => theme.color.fail};
`

const InputStatus = styled.span`
  position: absolute;
  top: 0;
  left: -1px;
  height: 100%;
  width: 2px;
  border-radius: 3px 0 0 3px;
  background-color: ${({ theme, success }) => (success ? theme.color.success : theme.color.fail)} 
`

const StyledInput = styled.input`
  position: relative;
  flex-grow: 1;
  max-width: 100%;
  height: 100%;
  line-height: normal;
  border: none;
  box-sizing: border-box;
  ${borderSmall};
  padding-left: ${({ size }) => `${SIZE[size]}px`};
  padding-right: ${({ size }) => `${SIZE[size]}px`};
  font-size: ${({ size }) => TYPOGRAPHY[size]}px;
  color: ${({ theme }) => theme.color.textDarker};
  background-color: ${({ disabled, theme }) => (disabled ? theme.color.miscLightest : '#fff')};

  &::placeholder {
    color: ${({ theme }) => theme.color.miscDark};
  }

  &:focus {
    outline-style: none;

    & + ${InputStatus} {
      display: none;
    }
  }

  &:disabled {
    &::placeholder {
      color: ${({ theme }) => theme.color.misc};
    }
  }
`

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-property: border-color, box-shadow;
  border-width: 1px;
  border-style: solid;
  ${switchTransition}
  ${borderInput}
  ${borderSmall}
  height: ${({ size }) => getInputHeight(size)};
  box-shadow: ${({ active, theme }) => active && `0 0 0 1px ${theme.color.primary}`};
  z-index: ${({ active }) => (active ? '3' : '1')};

  &:hover {
    border-color: ${({ theme, disabled }) => !disabled && theme.color.primary};
    z-index: 2;
  }
`

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
  }

  onHandleBlur = () => {
    this.setState({
      isActive: false,
    })
  }

  onHandleFocus = () => {
    this.setState({
      isActive: true,
    })
  }

  onFocusInput = () => {
    this.textInput.focus()
  }

  render() {
    const {
      active,
      size,
      success,
      error,
      disabled,
    } = this.props

    return (
      <InputWrapper
        {...this.props}
        active={active || this.state.isActive}
        size={size}
        disabled={disabled}
      >
        <StyledInput
          innerRef={(input) => { this.textInput = input }}
          {...this.props}
          onFocus={this.onHandleFocus}
          onBlur={this.onHandleBlur}
        />

        { (error || success) &&
          <InputStatus
            success={success}
            error={error}
          />
        }
        {
          error && <Error>
              { error }
            </Error>
        }
      </InputWrapper>
    )
  }
}

Input.defaultProps = {
  type: 'text',
  active: false,
  error: '',
  success: false,
  size: '',
  disabled: false,
  placeholder: '',
  value: undefined,
}

/* eslint-disable react/no-unused-prop-types */
Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  active: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.bool,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

export default Input
