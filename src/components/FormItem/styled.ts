import styled from 'styled-components'

interface TStyledLabelProps {
  disabled: boolean,
}

const LabelWrapper = styled.div`
  user-select: none;
`

const Label = styled.label<TStyledLabelProps>`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme, disabled }) => (disabled ? theme.color.colorTextDisabled : theme.color.colorTextSecondary)};
  user-select: none;
`

export { LabelWrapper, Label }
