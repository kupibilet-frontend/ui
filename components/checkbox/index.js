import React, { PropTypes, PureComponent } from 'react'
import Icon from '../icons'
import { CheckboxLabel, StyledCheckbox, IconWrap, CheckboxInput, LabelText } from './styled'


export default class Checkbox extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    disabled: false
  }

  render() {
    const {
      checked,
      disabled,
      onChange,
      children
    } = this.props

    return (
      <CheckboxLabel disabled={disabled} onChange={onChange}>
        <StyledCheckbox
          className="checkbox"
          disabled={disabled}
          checked={checked}
        >
          {
            checked ? (
              <IconWrap checked={checked}>
                <Icon name="checkbox" fill="background" />
              </IconWrap>
            ) : (
              null
            )
          }
          <CheckboxInput
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
        </StyledCheckbox>

        <LabelText className="label-text" disabled={disabled}>
          {children}
        </LabelText>

      </CheckboxLabel>
    )
  }
}
