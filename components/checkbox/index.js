import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'rc-util/lib/PureRenderMixin'
import styled, { keyframes } from 'styled-components'

import Icon from '../icons'
import { switchTransition } from '../../utils/transitions'

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
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`

const IconWrap = styled.span`
  animation: ${(props) => (props.checked ? `${fadeInDown} 0.15s` : 'none')};
  display: inline-block;
  margin-top: -1px;
  height: 18px;
  width: 18px;
`

const StyledCheckbox = styled.span`
  ${switchTransition};
  transition-property: background, border;
  background: ${(props) => checkboxBackground(props, props.theme)};
  border: ${(props) => `1px solid ${checkboxBorder(props, props.theme)}`};
  border-radius: 3px;
  height: 18px;
  width: 18px;
`

const LabelText = styled.span`
  ${switchTransition};
  transition-property: color;
  margin-left: 6px;
  color: ${(props) => props.disabled && props.theme.color.textLight}
`

const CheckboxLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;


  user-select: none;

  &:hover .checkbox {
    border-color: ${(props) => (props.disabled ? props.theme.color.textLighter : props.theme.color.primary)};
  };

  &:hover .label-text {
    color: ${(props) => (props.disabled ? props.theme.color.textLight : props.theme.color.primaryDarkest)};
  };
`

export default class Checkbox extends Component {
  constructor(props) {
    super(props)

    const checked = props.checked

    this.state = {
      checked,
    }
  }

  shouldComponentUpdate(...args) {
    return PureRenderMixin.shouldComponentUpdate.apply(this, args)
  }

  handleChange = (e) => {
    const { props } = this
    if (props.disabled) {
      return
    }
    this.setState({
      checked: e.target.checked,
    })
  }

  render() {
    const props = this.props

    const { checked } = this.state

    return (
      <CheckboxLabel
        disabled={props.disabled}
        onChange={this.handleChange}
      >
        <StyledCheckbox
          className="checkbox"
          disabled={props.disabled}
          checked={checked}
        >
          {checked &&
            <IconWrap
              checked={!!checked}
            >
              <Icon name="checkbox" stroke="background" />
            </IconWrap>
          }
          <CheckboxInput type="checkbox" />
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
  onChange() {},
}

Checkbox.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  onChange: PropTypes.func,
}
