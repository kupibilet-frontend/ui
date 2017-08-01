// @flow
import React, { Component } from 'react'
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

const INPUTHEIGHT = {
  large: '42px',
  normal: '36px',
  small: '30px',
}

const setDisplayInputStatus = ({ active, success, error }) => {
  if (active) {
    return 'none'
  }
  if (success || error) {
    return 'block'
  }
  return 'none'
}

const Error = styled.span`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  display: flex;
  align-items: center;
  padding: 3px 12px 5px;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  opacity: 0.97;
  z-index: 2;
  ${borderSmall}
  background-color: ${({ theme }) => theme.color.fail};
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
  width: 100%;
  transition-property: border-color, box-shadow;
  border-width: 1px;
  border-style: solid;
  ${switchTransition}
  ${borderInput}
  ${borderSmall}
  height: ${({ size }) => INPUTHEIGHT[size]};
  box-shadow: ${({ active, theme }) => active && `0 0 0 1px ${theme.color.primary}`};
  z-index: ${({ active }) => (active ? '3' : '1')};

  &:hover {
    border-color: ${({ theme, disabled }) => !disabled && theme.color.primary};
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -1px;
    display: ${(props) => setDisplayInputStatus(props)};
    height: 100%;
    width: 2px;
    border-radius: 3px 0 0 3px;
    background-color: ${({ theme, success }) => (success ? theme.color.success : theme.color.fail)};
    z-index: 2;
  }
`

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
  onBlur?: Function,
  onFocus?: Function
}

type State = {
  isActive: boolean,
}

class Input extends Component<{}, Props, State> {
  static defaultProps = {
    name: 'input',
    size: 'normal',
  }

  state = {
    isActive: false,
  }

  handleBlur = (e) => {
    const { onBlur } = this.props
    if (onBlur) onBlur(e)
    this.setState({
      isActive: false,
    })
  }

  handleFocus = (e) => {
    const { onFocus } = this.props
    if (onFocus) onFocus(e)
    this.setState({
      isActive: true,
    })
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
        active={active || this.state.isActive}
        size={size}
        disabled={disabled}
        success={success}
        error={error}
      >
        <StyledInput
          {...this.props}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />

        { error && <Error>
          { error }
        </Error>
        }
      </InputWrapper>
    )
  }
}

export default Input
