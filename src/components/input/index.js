import React, { PropTypes } from 'react'
import { StyledInput } from './styled'

const Input = ({ size, disabled, ...props }) => (
  <StyledInput
    {...props}
    className="input"
    type="text"
    name="input"
    placeholder="Только прямые рейсы"
    size={size}
    disabled={disabled}
  />
)

/* eslint-disable react/require-default-props */
Input.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Input
