import styled from 'styled-components'
import { Link } from 'react-router-dom'
import style from 'utils/link'

export const PaddingWrap = styled.span`
  display: inline-flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  padding-top: .1em;
  ${({ left }) => (
    left ? 'padding-right: 3px;' : 'padding-left: 3px;'
  )}
`

export const StyledLink = styled(Link)`
  ${style}
  display: inline-flex;
  align-items: center;
`
