import styled, { css } from 'styled-components'
import { Error } from 'components/Input/styled'

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
  height: 38px;

  padding: 4px;
  border-radius: 6px;
  
  
  ${({ theme, hasError }) => css`
    ${hasError ? `
      box-shadow: inset 0 0 0 2px ${theme.color.fail};
    ` : `
      box-shadow: inset 0 0 0 1px ${theme.color.misc};
    `}
    background: ${theme.color.miscSoft};
  `}
`

export const StyledError = styled(Error)`
  top: calc(100% + 1px);
`
