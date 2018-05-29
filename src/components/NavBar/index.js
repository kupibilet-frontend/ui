import React from 'react'
import PropTypes from 'prop-types'
import { Wrap } from './styled'

export const NavBar = (props) => (
  <Wrap className={props.className}>
    {props.children}
  </Wrap>
)

NavBar.defaultProps = {
  className: '',
}

NavBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
}

export { NavItem } from './styled'
