import React, { PropTypes, PureComponent } from 'react'
import styled, { keyframes } from 'styled-components'

import Icon from '../icons'
import { switchTransition } from '../../utils/transitions'
import { floatFromTop } from '../../utils/animations'

const checkboxBackground = (props, theme) => {
  if (props.checked) {
    return theme.color.primary
  } else if (props.disabled) {
    return theme.color.textLightest
  } return theme.color.background
}

const checkboxBorder = (props, theme) => {
  if (props.checked) {
    return theme.color.primary
  } else if (props.disabled) {
    return theme.color.textLighter
  } return theme.color.misc
}

const CheckboxInput = styled.input`
  display: none;
`

const fadeInDown = keyframes`
  ${floatFromTop};
`

const IconWrap = styled.span`
  animation: ${(props) => (props.checked ? `${fadeInDown} 0.15s` : 'none')};
  display: inline-block;
  margin: -1px;
  height: 18px;
  width: 18px;
`

const StyledCheckbox = styled.span`
  ${switchTransition};
  align-self: center;
  transition-property: background, border;
  background: ${(props) => checkboxBackground(props, props.theme)};
  border: ${(props) => `1px solid ${checkboxBorder(props, props.theme)}`};
  border-radius: 3px;
  height: 18px;
  width: 18px;
`

const LabelText = styled.span`
  ${switchTransition};
  align-self: flex-start;
  transition-property: color;
  margin-left: 6px;
  ${({ disabled, theme }) => (disabled &&
    `color: ${theme.color.textLight};`
  )}
`

const CheckboxLabel = styled.label`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')}
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  position: relative;
  user-select: none;

  &:hover .checkbox {
    border-color: ${(props) => (props.disabled ? props.theme.color.textLighter : props.theme.color.primary)};
  };

  &:hover .label-text {
    color: ${(props) => (props.disabled ? props.theme.color.textLight : props.theme.color.primaryDarkest)};
  };
`

export default class Checkbox extends PureComponent {
  render() {
    const props = this.props

    return (
      <CheckboxLabel
        disabled={props.disabled}
        onChange={props.onChange}
      >
        <StyledCheckbox
          className="checkbox"
          disabled={props.disabled}
          checked={props.checked}
        >
          {props.checked &&
            <IconWrap
              checked={props.checked}
            >
              <Icon name="checkbox" fill="background" />
            </IconWrap>
          }
          <CheckboxInput
            type="checkbox"
            checked={props.checked}
            onChange={props.onChange}
            disabled={props.disabled}
          />
        </StyledCheckbox>

        <LabelText
          className="label-text"
          disabled={props.disabled}
        >
          {props.children}
        </LabelText>

      </CheckboxLabel>
    )
  }
}

Checkbox.defaultProps = {
  checked: false,
}

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
}
