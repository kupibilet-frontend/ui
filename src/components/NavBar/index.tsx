import React from 'react'
import { Wrap, Inner } from './styled'

export interface TProps {
  className?: string,
  children: React.ReactNode,
}

const MobileHorizontalScroll = ({ className, children }: TProps): JSX.Element => (
  <Wrap className={className}>
    <Inner>
      {children}
    </Inner>
  </Wrap>
)


export const NavBar = ({ children, className }: TProps): JSX.Element => (
  <MobileHorizontalScroll className={className}>
    {children}
  </MobileHorizontalScroll>
)

export { NavItem } from './styled'

export default MobileHorizontalScroll
