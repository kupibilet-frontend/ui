import styled from 'styled-components'

const LabelWrapper = styled.div`
  user-select: none;
`

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.textDarker};
  user-select: none;
`

export { LabelWrapper, Label }
