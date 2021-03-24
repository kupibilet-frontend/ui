import styled, { css } from 'styled-components'
import { borderRadiusSmall } from 'utils/borderRadius'
import Text from 'components/Typography/Text'

interface TStyledWrapperProps {
  isSelected: boolean,
}

export const StyledWrapper = styled(Text)<TStyledWrapperProps>`
  padding: 9px 14px 9px 14px;
  cursor: pointer;
  text-align: center;
  height: 100%;
  ${({ theme, isSelected }) => css`
      box-shadow: inset 1px 0 0 0 ${theme.color.misc};
      ${isSelected ? `
        color: ${theme.color.background};
        font-weight: 600;
        background: ${theme.color.primaryDarkest};
        box-shadow: inset 0 0 0 1px ${theme.color.primaryDarkest} !important;
      ` : `
        &:hover {
          box-shadow: inset 0 0 0 1px ${theme.color.primaryDark} !important;
          background: ${theme.color.miscLightest};
          color: ${theme.color.primaryDarkest};
        }
      `}
    `
}`


export const HiddenRadio = styled.input.attrs(() => ({ type: 'radio' }))`
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
      z-index: 2;
    }
  }
`
interface TItemWrapperProps {
  isSelected: boolean,
}

// add external container for managing styles
export const ItemWrapper = styled.div<TItemWrapperProps>`
  position: relative;
  flex: 1 1 auto;
  ${({ isSelected }) => (isSelected ? 'z-index: 1;' : '')}
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