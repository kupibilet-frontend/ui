import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { select, text, boolean } from '@kadira/storybook-addon-knobs'
import { StyledLabel, StyledSpan, StyledInputSpan, ButtonCircle, InputCircle } from './styled'
import Input from './index'

const sizesSelect = (defaultValue = 'large') => select(
  'size',
  {
    large: 'Large',
    normal: 'Normal',
    small: 'Small',
  },
  defaultValue,
)

const inputDefault = {
  name: 'input',
  placeholder: 'Только прямые рейсы',
  errorText: 'Только латинские буктвы',
  iconText: '?',
}

storiesOf('Input', module)
  .addWithInfo('default', () => (
    <StyledLabel className="label">
      <Input
        name={inputDefault.name}
        size={sizesSelect()}
        placeholder={inputDefault.placeholder}
      />
    </StyledLabel>
  ))
  .addWithInfo('label text', () => (
    <StyledLabel className="label">
      <StyledSpan>
        { text('text', 'Cake is a lie') }
      </StyledSpan>
      <Input
        name={inputDefault.name}
        size={sizesSelect()}
        placeholder={inputDefault.placeholder}
      />
    </StyledLabel>
  ))
  .addWithInfo('disabled', () => {
    const disabled = boolean('disabled', true)

    return (
      <StyledLabel className="label">
        <Input
          disabled={disabled}
          size={sizesSelect()}
          name={inputDefault.name}
          placeholder={inputDefault.placeholder}
        />
      </StyledLabel>
    )
  })
  .addWithInfo('success', () => {
    const success = boolean('success', true)

    return (
      <StyledLabel className="label">
        <Input
          success={success}
          name={inputDefault.name}
          size={sizesSelect()}
          placeholder={inputDefault.placeholder}
        />
      </StyledLabel>
    )
  })
  .addWithInfo('error', () => {
    const error = boolean('error', true)

    return (
      <StyledLabel className="label">
        <Input
          error={error}
          name={inputDefault.name}
          size={sizesSelect()}
          placeholder={inputDefault.placeholder}
          errorText={inputDefault.errorText}
        />
      </StyledLabel>
    )
  })
  .addWithInfo('icon right', () => {
    const iconName = text('iconName', 'question')

    return (
      <StyledLabel className="label">
        <Input
          name={inputDefault.name}
          size={sizesSelect()}
          placeholder={inputDefault.placeholder}
          iconName={iconName}
          iconText={inputDefault.iconText}
        />
      </StyledLabel>
    )
  })
  .addWithInfo('phone input', () => (
    <StyledLabel phone className="label">
      <StyledInputSpan>
        <InputCircle
          size={sizesSelect()}
          className="circle"
          type="tel"
          name="phone"
          maxlength="20"
          placeholder="Номер телефона"
        />
      </StyledInputSpan>
      <ButtonCircle
        size={sizesSelect()}
        className="circle_button"
      >
        { text('text', 'Получить') }
      </ButtonCircle>
    </StyledLabel>
  ))
