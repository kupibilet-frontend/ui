import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TYPOGRAPHY, sizeInput } from '../../utils/input'
import { color } from '../theme-provider/theme'
import { switchTransition } from '../../utils/transitions'

const Error = styled.span`
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    display: ${(props) => (props.error && 'flex')}
    align-items: center;
    padding: 3px ${sizeInput('normal', 'padding')}px 3px;
    ${({ size }) => ((size === 'small') && ' width: 100%')};
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    border-radius: 3px;
    background-color: ${color.fail};
    opacity: 0.97;
    z-index: 2;
`

const Input = styled.input`
  ${({ size }) => sizeInput(size)}
  width: 280px;
  font-size: ${({ size }) => TYPOGRAPHY[size]}px;
  line-height: normal;
  color: ${color.textDarker};
  border: 1px solid ${color.misc};
  border-radius: 3px;
  background-color: #FFFFFF;
  cursor: text;
  ${switchTransition}
  transition-property: border-color, box-shadow;


  &.icon {
    padding-right: 35px;
  }

  &::placeholder {
    color: ${color.miscDark};
  }

  &:hover {
    border-color: ${color.primary};
  }

  &:focus {
    height: ${({ size }) => Number(sizeInput(size, 'height')) + 2}px;
    box-shadow: 0 0 0 2px ${color.primary};
    outline-style: none;
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

const InputComponent = ({ size, disabled, placeholder, success, error, ...props }) => (
  <InputWrap
    {...props}
    success={success}
    error={error}
  >
    {
      error && <Error error size={size}>
          { props.errorText }
        </Error>
    }
    <Input
      className={props.className}
      type={props.type}
      name={props.name}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
    />
  </InputWrap>
)

InputComponent.defaultProps = {
  errorText: '',
  error: false,
  success: false,
  size: '',
  disabled: false,
  placeholder: '',
  className: 'input',
}

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  errorText: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
}

export default InputComponent
