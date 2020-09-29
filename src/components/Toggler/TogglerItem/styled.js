import styled, { css } from 'styled-components'
import { borderRadiusSmall } from 'utils/borderRadius'
import Text from 'components/Typography/Text'

export const StyledWrapper = styled(Text)`
  padding: 8px 14px 8px 14px;
  cursor: pointer;
  text-align: center;
  height: 100%;
  ${({ variant, theme, isSelected }) => {
    switch (variant) {
      case 'secondary':
        return css`
          font-size: 14px;
          color: ${theme.color.text};
          line-height: 18px;
          box-sizing: border-box;
          box-shadow: inset 1px 0 0 0 ${theme.color.misc};
          
          &:hover {
            background: ${theme.color.miscLightest};
            color: ${theme.color.text};
            box-shadow: inset 0 0 0 1px ${theme.color.primaryDark} !important;
          }
          &:active {
            background: ${theme.color.miscLightest};
          }
          
          ${isSelected && `
            color: ${theme.color.background};
            background: ${theme.color.background};
            color: ${theme.color.text};
            box-shadow: inset 0 0 0 2px ${theme.color.primaryDark} !important;
            &:hover {
              box-shadow: inset 0 0 0 2px ${theme.color.primaryDark} !important;
            }
          `}          
        `
      case 'primary':
      default:
        return css`
          box-shadow: inset 1px 0 0 0 ${theme.color.misc};
          ${isSelected ? `
            color: ${theme.color.background};
            font-weight: 600;
            background: ${theme.color.primaryDarkest};
          ` : `
            &:hover {
              box-shadow: inset 0 0 0 1px ${theme.color.primaryDark};
              background: ${theme.color.miscLightest};
              color: ${theme.color.primaryDarkest};
            }
          `}
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
  }
`

// add external container for managing styles
export const ItemWrapper = styled.div`
  position: relative;
  flex: 1 1 auto;
  width: 0;
  ${({ isSelected }) => css`
    z-index: ${isSelected ? 1 : 0};
  `}
  &:hover {
    z-index: 1;
  }
  &:first-child {
    ${StyledWrapper} {
      box-shadow: none;
      ${borderRadiusSmall.left}
    }
  }
  &:last-child{
    ${StyledWrapper} {
      ${borderRadiusSmall.right}
    }
  }
  & + & {
    margin-left: -1px;
  }
`
