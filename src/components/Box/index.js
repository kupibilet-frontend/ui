import styled, { css } from 'styled-components'
import { borderRadiusLarge } from 'utils/borderRadius'

export const styles = css`
  background: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.miscLighter};
  ${borderRadiusLarge.all};
`

const Box = styled.div`
  ${styles};
`

export default Box
