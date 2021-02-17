import React from 'react'

import { StyledButtonText, IconWrap } from './styled'
import cloneIconWithSize from './cloneIconWithSize'
import { BUTTON_SIZES_NAMES, TButtonVariant, TIconArg, TNeighboringInGroupType } from './types'
import RenderedComponent from './RenderedComponent'

export interface TButtonProps {
  size?: BUTTON_SIZES_NAMES,
  variant?: TButtonVariant,
  children?: React.ReactChild,
  disabled?: boolean,
  icon?: TIconArg,
  leftIcon?: TIconArg,
  rightIcon?: TIconArg,
  isBlock?: boolean,
  neighboringInGroup?: TNeighboringInGroupType,
  href?: string,
  target?: string,

  onClick?: (...args: any[]) => void,
}


const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  size = BUTTON_SIZES_NAMES.normal,
  icon = null,
  leftIcon = null,
  rightIcon = null,
  isBlock = false,
  neighboringInGroup = null,
  ...restProps
}: TButtonProps): JSX.Element => (
  <RenderedComponent
    neighboringInGroup={neighboringInGroup}
    size={size}
    variant={variant}
    isIconOnly={Boolean(icon)}
    hasLeftIcon={Boolean(leftIcon)}
    hasRightIcon={Boolean(rightIcon)}
    isBlock={Boolean(isBlock)}
    disabled={disabled}
    {...restProps}
  >
    {
      leftIcon ? (
        <IconWrap size={size}>
          { cloneIconWithSize(leftIcon, size) }
        </IconWrap>
      ) : null
    }

    {
      icon ? (
        <IconWrap size={size}>
          { cloneIconWithSize(icon, size) }
        </IconWrap>
      ) : (
        <StyledButtonText
          size={size}
          hasLeftIcon={Boolean(leftIcon)}
          hasRightIcon={Boolean(rightIcon)}
        >
          { children }
        </StyledButtonText>
      )
    }

    {
      rightIcon ? (
        <IconWrap size={size}>
          { cloneIconWithSize(rightIcon, size) }
        </IconWrap>
      ) : null
    }
  </RenderedComponent>
)

export default Button
