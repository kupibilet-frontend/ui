import styled, { DefaultTheme } from 'styled-components'

type TInputHintProps = {
  error: boolean,
  disabled?: boolean,
  theme: DefaultTheme,
}

function getInputHintColor({ error, theme, disabled }: TInputHintProps) {
  if (disabled) return theme.input.input_hint_default_medium_color_input_hint_disable
  if (error) return theme.input.input_hint_default_medium_color_input_hint_error

  return theme.input.input_hint_default_medium_color_input_hint_normal
}

export const StyledContainer = styled.div<TInputHintProps>`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.input.input_hint_default_medium_typography_desktop_input_hint.size}px;
  line-height: ${({ theme }) => theme.input.input_hint_default_medium_typography_desktop_input_hint.lineHeight}px;
  color: ${(props) => getInputHintColor(props)};
  z-index: 2;
  margin-top: 4px;
`
