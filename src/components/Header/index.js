// @flow
import React from 'react'

import DefaultHeaderLogo from './DefaultHeaderLogo'

import {
  HeaderWrapper,
  HeaderInner,
  HeaderContent,
  LogoContainer,
} from './styled'

type Props = {
  renderLogo?: () => React.Node,
  renderLeftSide?: () => React.Node,
  renderRightSide?: () => React.Node,
}

const Header = (props: Props) => {
  const {
    renderLogo,
    renderLeftSide,
    renderRightSide,
  } = props

  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoContainer>
          { renderLogo() }
        </LogoContainer>

        <HeaderContent>
          { renderLeftSide() }
          { renderRightSide() }
        </HeaderContent>
      </HeaderInner>
    </HeaderWrapper>
  )
}

Header.defaultProps = {
  renderLogo: () => <DefaultHeaderLogo />,
  renderLeftSide: () => <div />,
  renderRightSide: () => <div />,
}

export default Header
