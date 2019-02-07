// @flow
import React from 'react'

import {
  HeaderWrapper,
  HeaderInner,
  LeftSide,
  RightSide,
  Logo,
  LogoLink,
} from './styled'

type LogoLinkParams = {
  title?: string, // A message to show when the user hovers over the logo
  href?: string, // Use it with normal <a>
  to?: string, // Use it with React Router <Link>
  rel?: string, // You can set "nofollow"
  // ... <-- You can pass anything else if you really-really want to
}

type Props = {
  withTopBorder?: boolean,
  innerMaxWidth?: string,
  leftSide?: React.Node,
  rightSide?: React.Node,
  logoLinkComponent?: React.Node, // You can choose Link from React Router
  logoLinkParams?: LogoLinkParams, // You can pass additional parameters
}

const Header = (props: Props) => {
  const {
    withTopBorder,
    innerMaxWidth,
    leftSide,
    rightSide,
    logoLinkComponent,
    logoLinkParams,
  } = props

  // Here we construct our logo link element.
  // Sometimes it might be useful to render it as <a> and sometimes as <Link>
  const Element = logoLinkComponent ? LogoLink.withComponent(logoLinkComponent) : LogoLink
  const params = logoLinkParams || {}
  const logoLink = <Element {...params} />

  return (
    <HeaderWrapper withTopBorder={withTopBorder}>
      <HeaderInner innerMaxWidth={innerMaxWidth}>
        <LeftSide>
          <Logo>
            {logoLink}
          </Logo>
          {leftSide}
        </LeftSide>
        <RightSide>
          {rightSide}
        </RightSide>
      </HeaderInner>
    </HeaderWrapper>
  )
}

Header.defaultProps = {
  withTopBorder: false,
  innerMaxWidth: '1178px',
  leftSide: null,
  rightSide: null,
  logoLinkComponent: 'a',
  logoLinkParams: { href: '#' },
}

export default Header
