import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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
    disabled: false,
    checked: false,
    onChange() {},
  }

  render() {
    const {
      checked,
      disabled,
      onChange,
      children,
      ...props
    } = this.props

    return (
      <CheckboxLabel disabled={disabled} className={props.className}>
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
            {...props}
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
