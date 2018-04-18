// @flow

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { switchTransition } from 'utils/transitions'

export type Value = string | boolean | number

const getBorderColor = ({ theme, checked, disabled }) => {
  if (checked) {
    return theme.color.primary
  } else if (disabled) {
    return theme.color.textLighter
  }

  return theme.color.misc
}

const getBoxShadow = props =>
  `box-shadow: inset 0 0 0 1px ${getBorderColor(props)}`

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
  }
`

export const LabelText = styled.span`
  ${switchTransition};
  transition-property: color;
  margin-left: 6px;
  width: 100%;
  ${({ disabled, theme }) => disabled && `color: ${theme.color.textLight};`};
`

export const RadioLabel = styled.label`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  align-items: center;
  position: relative;
  user-select: none;
  width: 100%;

  ${StyledRadio}:hover {
    border-color: ${({ theme, disabled }) =>
      disabled ? theme.color.textLighter : theme.color.primary};
  }

  ${LabelText}:hover {
    color: ${({ theme, disabled }) =>
      disabled ? theme.color.textLight : theme.color.primaryDarkest};
  }
`

type Props = {
  value: Value,
  label: string,
  disabled?: boolean,
  className?: string,
}

type Context = {
  selectedValue: Value,
  onChange: Function,
}

const Radio = (props: Props, context: Context) => {
  const { value, label, disabled, className } = props
  const { selectedValue, onChange } = context
  const checked = value === selectedValue

  return (
    <RadioLabel disabled={disabled} className={className}>
      <StyledRadio disabled={disabled} checked={checked} />
      <RadioInput
        {...props}
        type="radio"
        checked={checked}
        onChange={() => onChange(value)}
      />
      <LabelText disabled={disabled}>{label}</LabelText>
    </RadioLabel>
  )
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
