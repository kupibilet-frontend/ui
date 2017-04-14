import React, { PropTypes } from 'react'
import { text } from '@kadira/storybook-addon-knobs'
import styled from 'styled-components'
import { PADDING, TYPOGRAPHY, calculate } from './utils'
import { color } from '../theme-provider/theme'

const Icon = styled.span`
  position: absolute;
  top: calc(50% - 9px);
  right: 10px;
  width: 18px;
  height: 18px;
  font-size: 14px;
  line-height: 16px;
  color: ${color.miscDark};
  border-radius: 50%;
  border: 1px solid ${color.misc};
  background-color: #FFFFFF;
  text-align: center;
`

const Error = styled.span`
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    display: ${(props) => (props.error ? 'block' : 'none')}
    padding-top: 3px;
    padding-bottom: 5px;
    padding-left: ${PADDING.normal}px;
    width: ${({ size }) => ((size === 'small') ? '100%' : '181px')};
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    border-radius: 3px;
    background-color: ${color.fail};
    opacity: 0.97;
    z-index: 2;
`

const Input = styled.input`
  padding-left: ${({ size }) => PADDING[size]}px;
  padding-right: ${(props) => (props.icon ? 35 : ({ size }) => PADDING[size])}px;
  height: ${({ size }) => calculate(size)}px;
  width: ${(props) => (props.circle ? '347px' : '280px')};
  font-size: ${({ size }) => TYPOGRAPHY[size]}px;
  line-height: normal;
  color: ${color.textDarker};
  border: 1px solid ${color.misc};
  border-radius: ${(props) => (props.circle ? '100px 0 0 100px' : '3px')};
  background-color: #FFFFFF;
  box-sizing: border-box;
  cursor: text;

  &::placeholder {
    color: ${color.miscDark};
  }

  &:hover {
    border-color: ${color.primary};
  }

  &:focus {
    outline-style: ${(props) => (props.circle ? 'none' : 'auto')};
  }

  &:active {
    margin: -1px 0;
    height: ${({ size }) => calculate(size) + 2}px;
    border: 2px solid ${color.primary};
  }

  &:disabled {
    background-color: ${color.miscLightest};
    border: 1px solid ${color.miscLightest};

    &:hover {
      border-color: ${color.miscLightest};
    }

    &::placeholder {
      color: ${color.misc};
    }
  }
`

const InputWrap = styled.span`
  position: relative;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: ${(props) => ((props.success || props.error) ? 'block' : 'none')}
    height: 100%;
    width: 2px;
    border-radius: 3px 0 0 3px;
    background-color: ${(props) => (props.error ? color.fail : color.success)}
  }
`

const inputDefault = {
  className: 'input',
  type: 'text',
  name: 'input',
  placeholder: 'Только прямые рейсы',
  errorText: 'Только латинские буктвы',
  iconText: '?',
}

const InputComponent = ({ size, disabled, placeholder, success, error, ...props }) => (
  <InputWrap
    {...props}
    success={success}
    error={error}
  >
    {
      error && (
        <Error error size={size}>
          { text('errorText', inputDefault.placeholder || props.errorText) }
        </Error>
      )
    }
    <Input
      circle={props.circle}
      className={props.className || inputDefault.className}
      type={props.type || inputDefault.type}
      name={props.name || inputDefault.name}
      placeholder={placeholder || inputDefault.placeholder}
      size={size}
      disabled={disabled}
    />
    {
      props.iconName && (
        <Icon
          className="icon"
          name={props.iconName}
        >
          { text('text', inputDefault.iconText) }
        </Icon>
      )
    }
  </InputWrap>
)

InputComponent.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  iconText: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  circle: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default InputComponent
