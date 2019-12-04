import styled from 'styled-components'
import { borderRadiusSmall } from 'utils/borderRadius'

export const TogglerWrapper = styled.div`
  position: relative;
`

export const ItemsWrapper = styled.div`
  display: inline-flex;
  position: relative;
  ${({ hasError, theme }) => hasError && `
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
