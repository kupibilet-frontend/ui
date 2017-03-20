import styled from 'styled-components'

import { button } from '../../utils/reset'
import { switchTransition } from '../../utils/transitions'

export const SIZES = {
  small: 12,
  normal: 15,
  large: 18,
}

const TYPOGRAPHY = {
  small: 16,
  normal: 18,
  large: 20,
}

const calculateButtonPadding = (size, icon, hasLeftIcon, hasRightIcon) => {
  const spacing = SIZES[size]
  const typographyRelatedPadding = ((spacing * 2 - TYPOGRAPHY[size]) / 2).toFixed(1)
  const iconVisualCenterShift = 5 / 4
  const iconPadding = (SIZES[size] / 2 * iconVisualCenterShift).toFixed(1)

  // Symetric padding around icon-only button for circle effect
  if (icon) {
    return `padding: ${typographyRelatedPadding}px`
  }

  return `
    padding: ${typographyRelatedPadding}px;
    padding-right: ${hasRightIcon ? iconPadding : spacing}px;
    padding-left: ${hasLeftIcon ? iconPadding : spacing}px;
  `
}

const calculateTextPadding = (size, hasLeftIcon, hasRightIcon) => {
  const iconVisualCenterShift = 3 / 4
  const iconPadding = (SIZES[size] / 2 * iconVisualCenterShift).toFixed(1)

  return `0 ${hasRightIcon ? iconPadding : 0}px 0 ${hasLeftIcon ? iconPadding : 0}px`
}

export const StyledButton = styled.button`
  ${button}

  color: ${({ theme }) => theme.color.background};
  background: ${({ theme }) => theme.color.primary};
  border-radius: ${({ size }) => SIZES[size]}px;

  font-size: ${({ size }) => TYPOGRAPHY[size]}px;
  line-height: ${({ size }) => TYPOGRAPHY[size]}px;

  ${({ size, isIconOnly, hasLeftIcon, hasRightIcon }) => (
    calculateButtonPadding(size, isIconOnly, hasLeftIcon, hasRightIcon)
  )};

  ${switchTransition}
  transition-property: opacity, box-shadow;

  ${({ disabled }) => (disabled ?
    'opacity: .2;'
  : '')}

  &:hover {
    ${({ disabled, theme }) => (!disabled ? `
      cursor: pointer;
      box-shadow: 0 0 0 1px ${theme.color.primary};
    ` : '')}
  }

  &:active {
    ${({ disabled, theme }) => (!disabled ? `
      background: ${theme.color.primaryDark};
      box-shadow: none;
    ` : '')}
  }
`

export const StyledButtonText = styled.span`
  display: inline-block;
  vertical-align: top;

  padding: ${({ size, hasLeftIcon, hasRightIcon }) => calculateTextPadding(size, hasLeftIcon, hasRightIcon)}
`

export const IconWrap = styled.span`
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  align-items: center;

  width: ${({ size }) => TYPOGRAPHY[size]}px;
  height: ${({ size }) => TYPOGRAPHY[size]}px;
`
