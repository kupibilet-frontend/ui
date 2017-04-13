import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { select, text, boolean } from '@kadira/storybook-addon-knobs'
import { StyledLabel, StyledInputSpan, StyledInputSpanError, IconQuestion } from './styled'
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
        />
      </StyledInputSpan>
    </StyledLabel>
  ))
