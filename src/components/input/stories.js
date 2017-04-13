import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { select, text, boolean } from '@kadira/storybook-addon-knobs'
import { StyledLabel, StyledSpan, StyledInputSpan, StyledInputSpanError, IconQuestion, ButtonCircle, InputCircle } from './styled'
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

storiesOf('Input', module)
  .addWithInfo('default', () => (
    <StyledLabel className="label">
      <StyledInputSpan>
        <Input size={sizesSelect()} />
      </StyledInputSpan>
    </StyledLabel>
  ))
  .addWithInfo('label text', () => (
    <StyledLabel className="label">
      <StyledInputSpan>
        <StyledSpan>
          { text('text', 'Cake is a lie') }
        </StyledSpan>
        <Input size={sizesSelect()} />
      </StyledInputSpan>
    </StyledLabel>
  ))
  .addWithInfo('disabled', () => {
    const disabled = boolean('disabled', true)

    return (
      <StyledLabel className="label">
        <StyledInputSpan>
          <Input
            disabled={disabled}
            size={sizesSelect()}
          />
        </StyledInputSpan>
      </StyledLabel>
    )
  })
  .addWithInfo('success', () => (
    <StyledLabel className="label">
      <StyledInputSpan success>
        <Input size={sizesSelect()} />
      </StyledInputSpan>
    </StyledLabel>
  ))
  .addWithInfo('error', () => (
    <StyledLabel className="label">
      <StyledInputSpan error>
        <StyledInputSpanError error size={sizesSelect()}>
          { text('text', 'Cake is a lie') }
        </StyledInputSpanError>
        <Input size={sizesSelect()} />
      </StyledInputSpan>
    </StyledLabel>
  ))
  .addWithInfo('icon right', () => (
    <StyledLabel className="label">
      <StyledInputSpan>
        <Input icon size={sizesSelect()} />
        <IconQuestion
          className="icon"
          name="question"
        >
          { text('text', '?') }
        </IconQuestion>
      </StyledInputSpan>
    </StyledLabel>
  ))
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
