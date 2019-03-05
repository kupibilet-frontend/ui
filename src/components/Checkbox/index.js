// @flow
import React from 'react'
import Icon from 'components/Icon'
import {
  CheckboxLabel,
  StyledCheckbox,
  IconWrap,
  CheckboxInput,
  LabelText,
} from './styled'
import createE2EId from '../../utils/createE2EId'

type Props = {
  onChange?: (InputEvent) => *,
  checked: boolean,
  disabled?: boolean,
  children: React$Element<*>,
  name?: string,
  className?: string,
  namespace?: string,
}

export class Checkbox extends React.PureComponent<Props, void> {
  static defaultProps = {
    disabled: false,
    checked: false,
    onChange() {},
    name: '',
    className: '',
    namespace: undefined,
  }

  render() {
    const {
      checked,
      disabled,
      onChange,
      children,
      name,
      className,
      namespace,
    } = this.props

    return (
      <CheckboxLabel disabled={disabled} className={className}>
        <StyledCheckbox
          classname="checkmark"
          disabled={disabled}
          checked={checked}
          {...createE2EId(`${namespace}.checkbox`)}
        >
          {
            (checked && !disabled) ? (
              <IconWrap checked={checked}>
                <Icon name="checkmark" fill="background" />
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

        <LabelText
          {...createE2EId(`${namespace}.checkbox.label`)}
          className="label-text"
          disabled={disabled}
        >
          {children}
        </LabelText>

      </CheckboxLabel>
    )
  }
}
type RFCheckboxProps = FieldProps & {type?: 'checkbox'}
export default class RFCheckbox extends React.PureComponent<RFCheckboxProps, void> {
  // Ignore RF checkbox behaviour due true/"" values instead of expected true/false
  // See https://github.com/erikras/redux-form/pull/2863 and https://git.io/vHlZn
  onChange = (e: InputEvent) => {
    const { onChange } = this.props.input || this.props
    onChange(e.target.checked)
  }

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
