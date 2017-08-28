// @flow
import React from 'react'
import Icon from 'components/Icon'
import { CheckboxLabel, StyledCheckbox, IconWrap, CheckboxInput, LabelText } from './styled'

type Props = {
  onChange?: (InputEvent) => *,
  checked: boolean,
  disabled?: boolean,
  children?: React$Element<*>,
  name?: string,
  className?: string,
}

export class Checkbox extends React.PureComponent<Props, void> {
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

type RFProps = RF$FieldProps

// Disable eslint error: "Declare only one React component per file"
// eslint-disable-next-line react/no-multi-comp
export default class RFCheckbox extends React.PureComponent<RFProps, void> {
  // Ignore RF checkbox behaviour due true/"" values instead of expected true/false
  // See https://github.com/erikras/redux-form/pull/2863 and https://git.io/vHlZn
  onChange = (e: InputEvent) => (
    this.props.input.onChange(e.target.checked)
  )

  render() {
    const { input, type = 'checkbox', ...props } = this.props
    const { checked } = input || props

    return (
      <Checkbox
        {...props}
        {...input}
        type={type}
        checked={Boolean(checked)}
        onChange={this.onChange}
      />
    )
  }
}
