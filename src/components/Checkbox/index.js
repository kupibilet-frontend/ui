import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Icon from 'components/Icon'
import { CheckboxLabel, StyledCheckbox, IconWrap, CheckboxInput, LabelText } from './styled'


export default class Checkbox extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    disabled: false,
    checked: false,
    onChange() {},
    name: '',
    className: '',
  }

  render() {
    const {
      checked,
      disabled,
      onChange,
      children,
      name,
      className,
    } = this.props

    return (
      <CheckboxLabel disabled={disabled} className={className}>
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
            name={name}
          />
        </StyledCheckbox>

        <LabelText className="label-text" disabled={disabled}>
          {children}
        </LabelText>

      </CheckboxLabel>
    )
  }
}
