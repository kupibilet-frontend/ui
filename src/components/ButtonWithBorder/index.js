// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import Icon from 'components/Icon'

import { StyledButtonWithBorder, ButtonText, IconWrap } from './styled'

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

class ButtonWithBorder extends Component<Props> {
  static defaultProps = {
    onClick: () => null,
    iconName: null,
    themeColor: 'secondaryDarkest',
    withOvershadow: false,
    overshadowThemeColor: 'miscLightest',
    className: null,
    customIcon: null,
  }

  getIcon() {
    const { iconName, customIcon, themeColor } = this.props

    if (customIcon && React.isValidElement(customIcon)) {
      return (
        <IconWrap>
          {customIcon}
        </IconWrap>
      )
    }

    if (iconName) {
      return (
        <Icon size="normal" name={iconName} fill={themeColor} />
      )
    }

    return null
  }

  render() {
    const {
      children,
      withOvershadow,
      themeColor,
      onClick,
      overshadowThemeColor,
      className,
    } = this.props

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
        {this.getIcon()}
      </StyledButtonWithBorder>
    )
  }
}


export default ButtonWithBorder
