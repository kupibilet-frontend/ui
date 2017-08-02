import styled, { css } from 'styled-components'
import { borderLarge } from 'utils/borders'

export const styles = css`
  background: ${({ theme }) => (theme.color.background)};
  border: 1px solid ${({ theme }) => (theme.color.miscLighter)};
  ${borderLarge}
`

const Box = styled.div`
  ${styles}
`

export default Box
