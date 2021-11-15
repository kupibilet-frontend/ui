import React from 'react'

import { StyledButton, StyledButtonLink } from './styled'
import { TButtonSize, TButtonVariant, TNeighboringInGroupType } from './types'

interface TRenderedComponentProps {
  size: TButtonSize,
  variant: TButtonVariant,
  children: JSX.Element | (JSX.Element | null)[],
  disabled: boolean,
  isBlock: boolean,
  neighboringInGroup: TNeighboringInGroupType,
  isIconOnly: boolean,
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
  href?: string,
  target?: string,
}

const RenderedComponent = (props: TRenderedComponentProps): JSX.Element => {
  const {
    size,
    variant,
    children,
    disabled,
    isBlock,
    neighboringInGroup,
    isIconOnly,
    hasLeftIcon,
    hasRightIcon,
    href,
    ...restProps
  } = props

  if (href) {
    return (
      <StyledButtonLink
        href={href}
        size={size as any}
        variant={variant as any}
        disabled={disabled}
        isBlock={isBlock}
        neighboringInGroup={neighboringInGroup}
        isIconOnly={isIconOnly}
        hasLeftIcon={hasLeftIcon}
        hasRightIcon={hasRightIcon}
        {...restProps}
      >
        {children}
      </StyledButtonLink>
    )
  }

  return (
    <StyledButton
      size={size}
      variant={variant}
      disabled={disabled}
      isBlock={isBlock}
      neighboringInGroup={neighboringInGroup}
      isIconOnly={isIconOnly}
      hasLeftIcon={hasLeftIcon}
      hasRightIcon={hasRightIcon}
      {...restProps}
    >
      {children}
    </StyledButton>
  )
}

export default RenderedComponent
