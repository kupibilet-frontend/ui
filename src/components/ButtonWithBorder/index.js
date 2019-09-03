// @flow

import React from 'react'
import type { Node } from 'react'
import Icon from 'components/Icon'

import { StyledButtonWithBorder, ButtonText } from './styled'

type Props = {
  children: Node,
  onClick?: () => null,
  iconName?: string,
  withOvershadow?: boolean,
  themeColor?: string,
  overshadowThemeColor?: string,
  className?: string,
  customIcon?: Node,
}

const defaultProps = {
  onClick: () => null,
  iconName: 'cross',
  themeColor: 'secondaryDarkest',
  withOvershadow: false,
  overshadowThemeColor: 'miscLightest',
  className: null,
  customIcon: null,
}

const ButtonWithBorder = ({
  children,
  withOvershadow,
  themeColor,
  onClick,
  iconName,
  overshadowThemeColor,
  className,
  customIcon,
}: Props) => {
  return (
    <StyledButtonWithBorder
      onClick={onClick}
      themeColor={themeColor}
      withOvershadow={withOvershadow}
      overshadowThemeColor={overshadowThemeColor}
      className={className}
    >
      <ButtonText>
        {children}
      </ButtonText>
      {customIcon ? (
        <>
          {customIcon}
        </>
      ) : (
        <Icon size="normal" name={iconName} fill={themeColor} />
      )}
    </StyledButtonWithBorder>
  )
}

ButtonWithBorder.defaultProps = defaultProps

export default ButtonWithBorder
