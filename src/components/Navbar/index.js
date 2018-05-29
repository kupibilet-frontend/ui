import React from 'react'
import PropTypes from 'prop-types'
import { Wrap } from './styled'

const Navbar = (props) => (
  <Wrap>
    {props.children}
  </Wrap>
)

Navbar.propTypes = {
  children: PropTypes.any.isRequired,
}

export { Item, ItemStyle } from './styled'

export default Navbar
