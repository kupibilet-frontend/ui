// @flow

import * as React from 'react'
import { Wrap, Inner } from './styled'

type TProps = {
  className: string,
  children: React.Node,
}

const MobileHorizontalScroll = ({ className, children }: TProps) => (
  <Wrap className={className}>
    <Inner>
      {children}
    </Inner>
  </Wrap>
)


export const NavBar = ({ children, className }: TProps) => (
  <MobileHorizontalScroll className={className}>
    {children}
  </MobileHorizontalScroll>
)

export { NavItem } from './styled'

export default MobileHorizontalScroll
