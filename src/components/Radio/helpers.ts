import { DefaultTheme } from 'styled-components'

export function getLabelColor(theme: DefaultTheme, disabled?: boolean, checked?: boolean): string {
  if (disabled) return theme.radio.radio_button_default_medium_color_text_disable
  if (checked) return theme.radio.radio_button_default_medium_color_text_active

  return theme.radio.radio_button_default_medium_color_text_normal
}
