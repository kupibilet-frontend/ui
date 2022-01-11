import styled, { css } from 'styled-components'
import Text from 'components/Typography/Text'
import { borderRadiusMedium } from 'utils/borderRadius'

interface TStyledWrapperProps {
  isSelected: boolean,
}

export const StyledWrapper = styled(Text)<TStyledWrapperProps>`
  padding: 9px 14px 9px 14px;
  cursor: pointer;
  text-align: center;
  height: 100%;

  color: ${({ theme }) => theme.color.colorTextSecondary};
  ${borderRadiusMedium.all}

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isSelected }) => isSelected && css`
    color: ${({ theme }) => theme.color.colorTextPrimary};
    background-color: ${({ theme }) => theme.color.colorBgPrimary};
    font-weight: 500;
    box-shadow: 0px 1px 3px rgba(98, 112, 139, 0.2);
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
      border: 2px solid ${({ theme }) => theme.color.primary500}; 
      pointer-events: none;
      z-index: 2;
    }
  }
`
interface TItemWrapperProps {
  isSelected: boolean,
  hasDelimiter: boolean,
}

// add external container for managing styles
export const ItemWrapper = styled.div<TItemWrapperProps>`
  position: relative;
  flex: 1 1 auto;
  ${({ isSelected }) => (isSelected ? 'z-index: 1;' : '')}
  &:hover {
    z-index: 1;
  }
  ${({ hasDelimiter }) => hasDelimiter && (
    css`
      &:after {
        content: '';
        width: 1px;
        height: 24px;
        background-color: ${({ theme }) => theme.color.misc200};
        display: block;
        position: absolute;
        right: 0;
        top: 3px;
      }
    `
  )}
`
