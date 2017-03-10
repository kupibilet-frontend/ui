import React from 'react'
import styled from 'styled-components'

import { button } from '../../utils/reset'

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

const calculateButtonPadding = (size, icon) => {
  const spacing = SIZES[size]
  const typographyRelatedSpacing = (spacing * 2 - TYPOGRAPHY[size]) / 2

  // Symetric padding around icon-only button for circle effect
  if(icon) {
    return `${ typographyRelatedSpacing.toFixed(1) }px`
  }

  return `${ typographyRelatedSpacing.toFixed(1) }px ${ spacing }px`
}

export const StyledButton = styled.button`
  ${ button }

  color: ${ ({theme}) => theme.color.background };
  background: ${({ theme }) => theme.color.primary};
  border-radius: ${ ({size}) => SIZES[size] }px;

  font-size: ${ ({size}) => TYPOGRAPHY[size] }px;
  line-height: ${ ({size}) => TYPOGRAPHY[size] }px;

  padding: ${ ({size, isIconOnly}) => calculateButtonPadding(size, isIconOnly) };

  ${ ({disabled}) => (disabled ?
    `opacity: .2;`
  : '')}

  &:hover {
    ${ ({disabled, theme}) => (!disabled ? `
      cursor: pointer;
      box-shadow: 0 0 0 1px ${theme.color.primary};
    ` : '')}
  }

  &:active {
    ${ ({disabled, theme}) => (!disabled ? `
      background: ${theme.color.primaryDark};
      box-shadow: 0 0 0 1px ${theme.color.primaryDark};
    ` : '')}
  }
`

export const StyledButtonText = styled.span`
  display: inline-block;
  vertical-align: top;
`

export const IconWrap = styled.span`
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  align-items: center;
  
  width: ${ ({size}) => TYPOGRAPHY[size] }px;
  height: ${ ({size}) => TYPOGRAPHY[size] }px;
`
