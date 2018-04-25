import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// The output of "babel-plugin-flow-react-proptypes" is unpredictable
// when flow and prop-types used together
import { switchTransition } from 'utils/transitions'

const getBorderColor = ({ theme, checked, disabled }) => {
  if (checked) {
    return theme.color.primary
  } else if (disabled) {
    return theme.color.textLighter
  }

  return theme.color.misc
}

const getBoxShadow = (props) => `box-shadow: inset 0 0 0 1px ${getBorderColor(props)}`

const getRadioBackground = ({ theme, checked, disabled }) => {
  if (checked) {
    return theme.color.primary
  } else if (disabled) {
    return theme.color.textLightest
  }

  return theme.color.background
}

export const RadioInput = styled.input`
  display: none;
`

export const StyledRadio = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;
  border-radius: 50%;
  user-select: none;

  ${getBoxShadow};

  ${switchTransition};
  transition-property: background, border;
  background: ${getRadioBackground};

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.color.background};
    display: inline-flex;
    border-radius: 50%;
    opacity: ${({ checked }) => (checked ? 1 : 0)};
  };
`

export const LabelText = styled.span`
  ${switchTransition};
  transition-property: color;
  margin-left: 6px;
  width: 100%;
  ${({ disabled, theme }) => (disabled &&
    `color: ${theme.color.textLight};`
  )}
`

export const RadioLabel = styled.label`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  align-items: center;
  position: relative;
  user-select: none;
  width: 100%;

  ${StyledRadio}:hover {
    border-color: ${({ theme, disabled }) => (disabled ? theme.color.textLighter : theme.color.primary)};
  };

  ${LabelText}:hover {
    color: ${({ theme, disabled }) => (disabled ? theme.color.textLight : theme.color.primaryDarkest)};
  };
`

const Radio = (props, context) => {
  const { value, label, disabled, className } = props
  const { selectedValue, onChange } = context
  const checked = value === selectedValue

  return (
    <RadioLabel disabled={disabled} className={className}>
      <StyledRadio
        disabled={disabled}
        checked={checked}
      />
      <RadioInput
        {...props}
        type="radio"
        checked={checked}
        onChange={() => onChange(value)}
      />
      <LabelText disabled={disabled}>
        {label}
      </LabelText>
    </RadioLabel>
  )
}

Radio.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}


Radio.contextTypes = {
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func.isRequired,
}

Radio.defaultProps = {
  disabled: false,
  className: '',
}

export default Radio
