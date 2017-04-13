import React, { PropTypes } from 'react'
import { text } from '@kadira/storybook-addon-knobs'
import { StyledInputSpan, StyledInput, StyledInputSpanError, IconQuestion } from './styled'

const Input = ({ size, disabled, placeholder, name, success, error, iconName, ...props }) => (
  <StyledInputSpan
    {...props}
    success={success}
    error={error}
  >
    {
      error ? (
        <StyledInputSpanError error size={size}>
          { text('errorText', props.errorText) }
        </StyledInputSpanError>
      ) : (
        null
      )
    }
    <StyledInput
      className="input"
      type="text"
      name={name}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
    />
    {
      iconName ? (
        <IconQuestion
          className="icon"
          name={iconName}
        >
          { text('text', props.iconText) }
        </IconQuestion>
      ) : (
        null
      )
    }
  </StyledInputSpan>
)

Input.propTypes = {
  iconText: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default Input
