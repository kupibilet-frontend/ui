import styled, { css } from 'styled-components'
import { borderRadiusLarge } from 'utils/borderRadius'

export const styles = css`
  padding: 30px 42px;
  background: ${({ theme }) => (theme.color.background)};
  border: 1px solid ${({ theme }) => (theme.color.miscLighter)};

  /* TODO: Нужно переделать controlsGroup (переименовать его, заменить left-right на
  before и after и выпустить мажорную версию юайкита) */
  ${({ neighboringInGroup }) => {
    if (neighboringInGroup === 'right') {
      return `${borderRadiusLarge.top}`
    } else if (neighboringInGroup === 'left') {
      return `${borderRadiusLarge.bottom}`
    } else if (neighboringInGroup !== 'both') {
      return `${borderRadiusLarge.all}`
    }
    return ''
  }}

  ${({ neighboringInGroup }) => (
    ['left', 'both'].includes(neighboringInGroup) ? 'margin-top: -1px;' : ''
  )}
  `

const Box = styled.div`
  ${styles}
  `

export default Box
