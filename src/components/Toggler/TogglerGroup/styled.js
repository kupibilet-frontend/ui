import styled, { css } from 'styled-components'
import { borderRadiusSmall } from 'utils/borderRadius'
import { Error } from 'components/Input'

export const TogglerWrapper = styled.div`
  position: relative;
`

export const ItemsWrapper = styled.div`
  display: inline-flex;
  position: relative;
  ${({ hasError, isFocused, theme }) => hasError && !isFocused && css`
    &::before{
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      ${borderRadiusSmall.all}
      border: 2px solid ${theme.color.fail};
      pointer-events: none;
    }
  `};
`

export const StyledError = styled(Error)`
  top: calc(100% + 1px);
`
