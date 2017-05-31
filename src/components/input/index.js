import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import sizeInput from '../../utils/input'
import { color } from '../theme-provider/theme'
import { switchTransition } from '../../utils/transitions'

const calculateBorderAndRadius = (neighboringInGroup) => {
  if (neighboringInGroup === 'both') {
    return `
      border-right-color: transparent;
    `
  } else if (neighboringInGroup === 'left') {
    return `
      border-radius: 0 3px 3px 0;
    `
  } else if (neighboringInGroup === 'right') {
    return `
      border-radius: 3px 0 0 3px
      border-right-color: transparent;
    `
  }

  return 'border-radius: 3px'
}

const SIZE = {
  large: 15,
  normal: 12,
  small: 9,
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

const customNumber = arr.reduce((x, y) => Math.abs(x - y))

const Error = styled.span`
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    display: flex;
    align-items: center;
    padding: 3px ${sizeInput('normal', SIZE, customNumber, 'padding')}px 5px;
    ${({ size }) => ((size === 'small') && ' width: 100%')};
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    border-radius: 3px;
    background-color: ${color.fail};
    opacity: 0.97;
    z-index: 2;
`

const Input = styled.input`
  position: relative;
  ${({ size }) => sizeInput(size, SIZE, customNumber)}
  width: 280px;
  font-size: ${({ size }) => TYPOGRAPHY[size]}px;
  line-height: normal;
  color: ${color.textDarker};
  border: 1px solid ${color.misc};
  background-color: #FFFFFF;
  cursor: text;
  ${({ neighboringInGroup }) => calculateBorderAndRadius(neighboringInGroup)}
  ${switchTransition}
  transition-property: border-color, box-shadow;

  &.has-badge {
    padding-right: 35px;
  }

  &::placeholder {
    color: ${color.miscDark};
  }

  &:focus,
  &:hover {
    box-shadow: 0 0 0 1px ${color.primary};
    border-color: ${color.primary};
    outline-style: none;
    z-index: 2;

    & + .input-line {
      display: none;
    }
  }

  &:disabled {
    background-color: ${color.miscLightest};
    border: 1px solid ${color.miscLightest};
    cursor: auto;

    &:hover {
      border-color: ${color.miscLightest};
    }

    &::placeholder {
      color: ${color.misc};
    }
  }
`

const InputWrap = styled.div`
  position: relative;
  display: inline-block;
`
const InputLine = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 2px;
  border-radius: 3px 0 0 3px;
  background-color: ${(props) => (props.error ? color.fail : color.success)} 
`

const InputComponent = ({ size, disabled, placeholder, success, error, value, ...props }) => (
  <InputWrap>
    {
      value ? <Input
        {...props}
        className={props.className}
        type={props.type}
        name={props.name}
        placeholder={placeholder}
        size={size}
        disabled={disabled}
        value={value}
      /> : <Input
        {...props}
        className={props.className}
        type={props.type}
        name={props.name}
        placeholder={placeholder}
        size={size}
        disabled={disabled}
      />
    }
    {
      (error || success) && <InputLine
        success={success}
        error={error}
        className="input-line"
      />
    }
    {
      error && <Error error size={size}>
          { props.errorText }
        </Error>
    }
  </InputWrap>
)

InputComponent.defaultProps = {
  type: 'text',
  name: 'input',
  errorText: '',
  error: false,
  success: false,
  size: '',
  disabled: false,
  placeholder: '',
  className: 'input',
  value: '',
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
  value: PropTypes.string,
}

export default InputComponent
