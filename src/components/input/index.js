import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import sizeInput from '../../utils/input'
import { switchTransition } from '../../utils/transitions'
import { borderSmall } from '../../utils/borders'
import Icon from '../icons'

const calculateBorderAndRadius = (neighboringInGroup) => {
  if (neighboringInGroup === 'both') {
    return `
      margin-left: -1px;
    `
  } else if (neighboringInGroup === 'left') {
    return `
      margin-left: -1px;
      border-radius: 0 3px 3px 0;
    `
  } else if (neighboringInGroup === 'right') {
    return `
      border-radius: 3px 0 0 3px
    `
  }

  return borderSmall
}

const paddingInputWrapIcon = (props) => {
  const { leftIcon, rightIcon, size, positioDropdown } = props
  if (leftIcon && rightIcon) {
    return `
      padding-left: ${size === 'large' ? '9px' : '6px'};
      padding-right: ${size === 'large' ? '9px' : '6px'};
    `
  } else if (leftIcon || positioDropdown === 'left') {
    return `padding-left: ${size === 'large' ? '9px' : '6px'};`
  } else if (rightIcon || positioDropdown === 'right') {
    return `padding-right: ${size === 'large' ? '9px' : '6px'};`
  }
  return false
}

const marginInputForIcon = (props) => {
  const { leftIcon, rightIcon, size, positioDropdown } = props
  if (leftIcon && rightIcon) {
    return `
      margin-left: ${size === 'large' ? '8px' : '5px'};
      margin-right: ${size === 'large' ? '8px' : '5px'};
    `
  } else if (leftIcon || positioDropdown === 'left') {
    return `margin-left: ${size === 'large' ? '8px' : '5px'};`
  } else if (rightIcon && positioDropdown) {
    return 'margin-right: 3px;'
  } else if (rightIcon || positioDropdown === 'right') {
    return `margin-right: ${size === 'large' ? '8px' : '5px'};`
  }
  return false
}

const borderInput = (props) => {
  const { active, theme, disabled } = props
  if (active) {
    return `border-color: ${theme.color.primary}`
  } else if (disabled) {
    return `border-color: ${theme.color.miscLightest}`
  }
  return `border-color: ${theme.color.misc}`
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

const arr = []
Object.keys(SIZE).forEach((element) => {
  arr.push(SIZE[element])
})

const reduceArr = arr.reduce((x, y) => Math.abs(x - y))

const Error = styled.span`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  border-radius: 3px;
  opacity: 0.97;
  z-index: 2;
  padding: 3px ${sizeInput('normal', SIZE, reduceArr, 'padding')} 5px;
  ${({ size }) => ((size === 'small') && ' width: 100%')};
  background-color: ${({ theme }) => theme.color.fail};
`

const Input = styled.input`
  position: relative;
  flex-grow: 1;
  max-width: 100%;
  height: 100%;
  line-height: normal;
  border: none;
  user-select: none;
  box-sizing: border-box;
  ${borderSmall};
  ${marginInputForIcon};
  padding-left: ${({ size }) => sizeInput(size, SIZE, reduceArr, 'padding')};
  padding-right: ${({ size }) => sizeInput(size, SIZE, reduceArr, 'padding')};
  font-size: ${({ size }) => TYPOGRAPHY[size]}px;
  color: ${({ theme }) => theme.color.textDarker};
  background-color: ${({ disabled, theme }) => (disabled ? theme.color.miscLightest : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'text')};
  ${({ neighboringInGroup }) => calculateBorderAndRadius(neighboringInGroup)};

  &::placeholder {
    color: ${({ theme }) => theme.color.miscDark};
  }

  &:focus {
    outline-style: none;

    & + .input-line {
      display: none;
    }
  }

  &:disabled {
    &::placeholder {
      color: ${({ theme }) => theme.color.misc};
    }
  }
`

const InputWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  transition-property: border-color, box-shadow;
  border-width: 1px;
  border-style: solid;
  ${switchTransition}
  ${borderInput}
  ${paddingInputWrapIcon};
  flex-direction: ${({ positioDropdown }) => positioDropdown === 'left' && 'row-reverse'};
  ${({ neighboringInGroup }) => calculateBorderAndRadius(neighboringInGroup)}
  height: ${({ size }) => sizeInput(size, SIZE, reduceArr, 'height')};
  box-shadow: ${({ active, theme }) => active && `0 0 0 1px ${theme.color.primary}`};
  z-index: ${({ active }) => (active ? '3' : '1')};

  &:hover {
    border-color: ${({ theme, disabled }) => !disabled && theme.color.primary};
    z-index: 2;
  }

`
const InputLine = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 2px;
  border-radius: 3px 0 0 3px;
  background-color: ${({ theme, success }) => (success ? theme.color.success : theme.color.fail)} 
`

const IconWrapper = styled(Icon)`
  transition-property: transform;
  margin-right: ${({ positioDropdown, rightIcon }) => (positioDropdown && rightIcon) && '1px;'};
  ${({ isActive }) => isActive && 'transform: rotate(-180deg);'}
`

const BlockClick = styled.div`
  display: inline-block;
  cursor: pointer;
`

class InputComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
  }

  onActionBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur()
    }
    this.setState({
      isActive: false,
    })
  }

  onActionFocus = (event) => {
    if (this.props.onFocus) {
      this.props.onFocus()
    }
    if (this.props.onToggleDropdown) {
      this.props.onToggleDropdown(event, !this.props.isDropdown)
    }
    this.setState({
      isActive: true,
    })
  }

  onFocusInput = () => {
    this.textInput.focus()
  }

  render() {
    const { size, success, error, neighboringInGroup, disabled, leftIcon, rightIcon } = this.props

    return (
      <InputWrap
        size={size}
        active={this.state.isActive}
        neighboringInGroup={neighboringInGroup}
        disabled={disabled}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        positioDropdown={this.props.positioDropdown}
      >
        <div onClick={this.onFocusInput}>{leftIcon}</div>
        <Input
          innerRef={(input) => { this.textInput = input }}
          {...this.props}
          onFocus={this.onActionFocus}
          onBlur={this.onActionBlur}
        />

        { (error || success) &&
          <InputLine
            success={success}
            error={error}
            className="input-line"
          />
        }
        {
          error && <Error error size={size}>
              { error }
            </Error>
        }
        <div onClick={this.onFocusInput}>{rightIcon}</div>

        {
          (this.props.isDropdown !== undefined) && <BlockClick onClick={this.onFocusInput}>
            <IconWrapper
              positioDropdown={this.props.positioDropdown}
              isActive={this.props.isDropdown}
              rightIcon={rightIcon}
              name="arrow-down"
              stroke="miscDark"
              fill="miscDark"
            />
          </BlockClick>
        }
      </InputWrap>
    )
  }
}

InputComponent.defaultProps = {
  error: '',
  success: false,
  size: '',
  disabled: false,
  placeholder: '',
  className: 'input',
  value: undefined,
  positionIcon: '',
  neighboringInGroup: '',
  rightIcon: null,
  leftIcon: null,
  isDropdown: undefined,
  onToggleDropdown() {},
  positioDropdown: '',
}

/* eslint-disable react/no-unused-prop-types */
InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.bool,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  positionIcon: PropTypes.string,
  neighboringInGroup: PropTypes.string,
  rightIcon: PropTypes.element,
  leftIcon: PropTypes.element,
  isDropdown: PropTypes.any,
  onToggleDropdown: PropTypes.func,
  positioDropdown: PropTypes.string,
}

export default InputComponent
