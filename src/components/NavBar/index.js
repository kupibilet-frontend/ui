import React from 'react'
import PropTypes from 'prop-types'
import { Wrap } from './styled'

export const NavBar = (props) => (
  <Wrap>
    {props.children}
  </Wrap>
)

NavBar.propTypes = {
  children: PropTypes.any.isRequired,
}

export { NavItem } from './styled'
