import React, { useCallback } from 'react'
import { WrappedFieldProps } from 'redux-form'
import _get from 'lodash/get'
import Icon from 'components/Icon'
import { COLOR_NAMES } from 'components/ThemeProvider/types'
import {
  CheckboxLabel,
  StyledCheckbox,
  IconWrap,
  CheckboxInput,
  LabelText,
} from './styled'

type TProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  checked: boolean,
  disabled?: boolean,
  children: React.ReactChild,
  name?: string,
  className?: string,
}

const Checkbox = React.memo((props: TProps) => {
  const {
    checked = false,
    disabled = false,
    onChange = () => ({}),
    children,
    name = '',
    className = '',
  } = props

  return (
    <CheckboxLabel disabled={disabled} className={className}>
      <StyledCheckbox
        classname="checkmark"
        disabled={disabled}
        checked={checked}
      >
        {(checked && !disabled) ? (
          <IconWrap checked={checked}>
            <Icon name="checkmark" fill={COLOR_NAMES.background} />
          </IconWrap>
        ) : (
          null
        )}
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
})

interface TRFCheckboxProps extends WrappedFieldProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  children: React.ReactChild,
}

const RFCheckbox = React.memo((props: TRFCheckboxProps) => {
  // Ignore RF checkbox behaviour due true/"" values instead of expected true/false
  // See https://github.com/erikras/redux-form/pull/2863 and https://git.io/vHlZn
  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = props.input || props
    // @ts-ignore
    onChange(e.target.checked)
  }, [props.onChange, _get(props, 'input.onChange', null)])

  const { input, ...restProps } = props
  const { checked } = input || props

  return (
    <Checkbox
      {...restProps}
      {...input}
      checked={Boolean(checked)}
      onChange={onChangeHandler}
    />
  )
})

export default RFCheckbox
