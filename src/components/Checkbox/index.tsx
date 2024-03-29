import React, { useCallback } from 'react'
import { WrappedFieldProps } from 'redux-form'
import _get from 'lodash/get'
import Icon from 'components/Icon'
import { ICON_SIZES } from 'components/Icon/consts'
import { TTypographyProps } from 'components/Typography'
import {
  TLabelPlacement,
  CheckboxLabel,
  StyledCheckbox,
  IconWrap,
  CheckboxInput,
  LabelText,
} from './styled'

export type TProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  checked: boolean,
  disabled?: boolean,
  children: React.ReactChild,
  name?: string,
  className?: string,
  labelPlacement?: TLabelPlacement,
  labelProps?: Omit<Partial<TTypographyProps>, 'children'> & { variant: Extract<TTypographyProps['variant'], 'medium' | 'large'> }
}

export const Checkbox = React.memo((props: TProps) => {
  const {
    checked = false,
    disabled = false,
    onChange = () => ({}),
    children,
    name = '',
    className = '',
    labelPlacement = 'end',
    labelProps,
    ...restProps
  } = props

  return (
    <CheckboxLabel
      checked={checked}
      disabled={disabled}
      className={className}
      labelPlacement={labelPlacement}
      labelProps={{ variant: labelProps?.variant || 'medium', ...labelProps }}
    >
      <StyledCheckbox
        classname="checkmark"
        disabled={disabled}
        checked={checked}
      >
        {checked ? (
          <IconWrap checked={checked}>
            <Icon
              name="checkbox-check"
              fill="colorBgPrimaryNormal"
              size={ICON_SIZES.xxsmall}
            />
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
          {...restProps}
        />
      </StyledCheckbox>
      <LabelText
        className="label-text"
        disabled={disabled}
        labelPlacement={labelPlacement}
        variant="medium"
        {...labelProps}
      >
        {children}
      </LabelText>

    </CheckboxLabel>
  )
})

export interface TRFCheckboxProps extends WrappedFieldProps {
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
