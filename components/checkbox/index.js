import React, { PropTypes, PureComponent } from 'react'
import Icon from '../icons'
import { CheckboxLabel, StyledCheckbox, IconWrap, CheckboxInput, LabelText } from './styled'


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

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
}
