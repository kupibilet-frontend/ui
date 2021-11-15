import React from 'react'

import { StyledButton, StyledButtonLink } from './styled'
import { TButtonSize, TButtonVariant, TNeighboringInGroupType, TThemeName } from './types'

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
  themeName: TThemeName,
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
    themeName,
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
        themeName={themeName}
        {...restProps}
      >
        {children}
      </StyledButtonLink>
    )
  }

  return (
    <StyledButton
      size={size as any}
      variant={variant as any}
      disabled={disabled}
      isBlock={isBlock}
      neighboringInGroup={neighboringInGroup}
      isIconOnly={isIconOnly}
      hasLeftIcon={hasLeftIcon}
      hasRightIcon={hasRightIcon}
      themeName={themeName}
      {...restProps}
    >
      {children}
    </StyledButton>
  )
}

export default RenderedComponent
