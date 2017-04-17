import styled, { css } from 'styled-components'

export const styles = css`
  background: ${({ theme }) => (theme.color.background)};
  border: 1px solid ${({ theme }) => (theme.color.miscLighter)};
  border-radius: 6px;
`

const Box = styled.div`
  ${styles}
`

export default Box
