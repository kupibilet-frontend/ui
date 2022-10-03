import styled from 'styled-components'

interface TStyledLabelProps {
  disabled: boolean,
}

const LabelWrapper = styled.div`
  user-select: none;
`

const Label = styled.label<TStyledLabelProps>`
  display: block;
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.input.input_label_default_medium_typography_desktop_input_label.size}px;
  line-height: ${({ theme }) => theme.input.input_label_default_medium_typography_desktop_input_label.lineHeight}px;
  color: ${({ theme, disabled }) => (disabled
    ? theme.input.input_label_default_medium_color_input_label_disable
    : theme.input.input_label_default_medium_color_input_label_normal
  )};
  user-select: none;
`

export { LabelWrapper, Label }
