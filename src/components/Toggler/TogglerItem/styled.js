import styled, { css } from 'styled-components'
import { borderRadiusSmall } from 'utils/borderRadius'
import Text from 'components/Typography/Text'

export const StyledWrapper = styled(Text)`
  padding: 8px 14px 8px 14px;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.misc};
  cursor: pointer;
  border-right-width: 0;
  background: ${({ theme }) => theme.color.background};
  text-align: center;
  height: 100%;
  &:hover {
    ${({ isSelected, theme }) => !isSelected && css`
      background: ${theme.color.miscLightest};
      color: ${theme.color.primaryDarkest};
      box-shadow: inset 0 0 0 1px ${theme.color.primaryDark};
      position: relative;
      &::after{
        content: '';
        height: calc(100% + 2px);
        position: absolute;
        width: 1px;
        top: -1px;
        right: -1px;
        background: ${theme.color.primaryDark};
        pointer-events: none;
        z-index: 1;
      }
    `}
  }
  ${({ isSelected, theme, variant }) => (isSelected && css`
    border-right-width: 1px;
    ${variant === 'primary' && css`
      box-shadow: inset 0 0 0 1px ${theme.color.primaryDarkest};
      color: ${theme.color.background};
      font-weight: 600;
      background: ${theme.color.primaryDarkest};
    `}
    ${variant === 'secondary' && css`
      box-shadow: inset 0 0 0 2px ${theme.color.primaryDarkest};
      color: ${theme.color.background};
      background: ${theme.color.background};
      color: ${theme.color.text};
    `}
  `)}
  
  ${({ variant, theme }) => {
    if (variant === 'secondary') {
      return `
        font-size: 14px;
        color: ${theme.color.text};
        line-height: 18px;
        box-sizing: border-box;
        
        &:hover {
          background: ${theme.color.background};
          color: ${theme.color.text};
          &:after {
            display: none;
          }
        }
        &:active {
          background: ${theme.color.miscLightest};
          box-shadow: inset 0 0 0 2px ${theme.color.primaryDarkest};
        }
      `
    }
  }}
`

export const HiddenRadio = styled.input.attrs(() => ({ type: 'radio' }))`
  opacity: 0;
  position: absolute;
  z-index: -1;
  &:focus {
    & + ${StyledWrapper} {
      position: static;
    }
    & + ${StyledWrapper}::after {
      display: none;
    }
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

// add external container for managing styles
export const ItemWrapper = styled.div`
  position: relative;
  flex: 1 1 auto;
  width: 0;
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
    ${StyledWrapper}:hover::after{
      display: none;
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
