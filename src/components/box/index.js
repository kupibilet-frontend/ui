import styled from 'styled-components'

const Box = styled.div`
  background: ${({ theme }) => (theme.color.background)};
  border: 1px solid ${({ theme }) => (theme.color.miscLighter)};
  border-radius: 6px;
`

export default Box
