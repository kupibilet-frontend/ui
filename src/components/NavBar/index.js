import React from 'react'
import PropTypes from 'prop-types'
import MobileHorizontalScroll from './styled'

export const NavBar = (props) => (
  <MobileHorizontalScroll className={props.className}>
    {props.children}
  </MobileHorizontalScroll>
)

NavBar.defaultProps = {
  className: '',
}

NavBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
}

export { default as MobileHorizontalScroll, NavItem } from './styled'
