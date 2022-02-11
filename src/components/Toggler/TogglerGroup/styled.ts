import styled, { css } from 'styled-components'
import { Error } from 'components/Input/styled'
import { borderRadiusMedium } from 'utils/borderRadius'

export const TogglerWrapper = styled.div`
  position: relative;
`

interface TItemsWrapperProps {
  hasError: boolean,
}

export const ItemsWrapper = styled.div<TItemsWrapperProps>`
  display: flex;
  position: relative;
  justify-content: stretch;
  align-items: stretch;
  overflow: hidden;
  height: 40px;

  padding: 4px;
  ${borderRadiusMedium.all}
  
  ${({ theme, hasError }) => css`
    ${hasError ? `
      box-shadow: inset 0 0 0 2px ${theme.color.error700};
    ` : `
      box-shadow: inset 0 0 0 1px ${theme.color.misc200};
    `}
    background: ${theme.color.colorBgLayoutDefault};
  `}
`

export const StyledError = styled(Error)`
  top: calc(100% + 1px);
`
