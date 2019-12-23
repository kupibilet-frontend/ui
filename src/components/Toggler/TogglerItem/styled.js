import styled, { css } from 'styled-components'
import { borderRadiusSmall } from 'utils/borderRadius'
import TextSmall from 'components/Typography/TextSmall'


export const StyledWrapper = styled(TextSmall)`
  padding: 8px 14px 8px 14px;
  border: 1px solid ${({ theme }) => theme.color.misc};
  cursor: pointer;
  border-right-width: 0;
  background: theme.color.background;
  &:hover{
    ${({ isSelected, theme }) => !isSelected && css`
      background: ${theme.color.miscLightest};
      color: ${theme.color.primaryDarkest};
      border-color: ${theme.color.primaryDark};
      border-right-width: 1px;
      border-left-width: 1px;
    `}
  }
  ${({ isSelected, theme }) => (isSelected && css`
    border-color: ${theme.color.primaryDarkest};
    color: ${theme.color.background};
    font-weight: 600;
    background: ${theme.color.primaryDarkest};
    border-right-width: 1px;
  `)}
`

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: absolute;
  z-index: -1;
  &:focus {
    & + ${StyledWrapper}::before{
      content: '';
      position: absolute;
      height: 100%;
      width: ${({ checked }) => (checked ? '100%' : 'calc(100% + 1px)')};
      top: 0;
      left: 0;
      border: 2px solid ${({ theme }) => theme.color.primaryDark}; 
      pointer-events: none;
      z-index: 1;
    }
  }
`

// add external container for manage styles
export const ItemWrapper = styled.div`
  ${({ isFocused }) => isFocused && css`position: relative;`}
  &:first-child{
    ${StyledWrapper} {
      ${borderRadiusSmall.left}
    }
    ${StyledWrapper}::before{
      ${borderRadiusSmall.left}
    }
  }
  &:last-child{
    ${StyledWrapper}{
      ${borderRadiusSmall.right}
      border-right-width: 1px;
    }
    ${StyledWrapper}::before{
      ${borderRadiusSmall.right}
      width: 100%;
    }
  }
  &:hover{
    & + div {
      ${StyledWrapper} {
        border-left-width: 0;
      }
    }
  }
  ${({ isSelected, theme }) => isSelected && css`
    & + div {
      &:hover{
        position: relative;
        &:before{
          content: '';
          height: 100%;
          position: absolute;
          width: 1px;
          top: 0;
          left: -1px;
          background: ${theme.color.primaryDark};
          pointer-events: none;
        }
      }
      ${StyledWrapper} {
        border-left-width: 0;
      }
    }
    ${StyledWrapper}::before{
      width: 100%;
    }
  `}
`
