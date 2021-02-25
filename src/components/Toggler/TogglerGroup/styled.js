import styled, { css } from 'styled-components'
import { borderRadiusSmall } from 'utils/borderRadius'
import { Error } from 'components/Input/styled'

export const TogglerWrapper = styled.div`
  position: relative;
`

export const ItemsWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: stretch;
  align-items: stretch;
  overflow: hidden;
  ${borderRadiusSmall.all}
  ${({ theme, hasError }) => css`
    ${hasError ? `
      box-shadow: inset 0 0 0 2px ${theme.color.fail};
    ` : `
      box-shadow: inset 0 0 0 1px ${theme.color.misc};
    `}
    background: ${theme.color.background};
  `}
`

export const StyledError = styled(Error)`
  top: calc(100% + 1px);
`
