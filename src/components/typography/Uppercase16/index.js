import PropTypes from 'prop-types'
import styled from 'styled-components'

const Uppercase16 = styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  padding-top: 9px;
  margin-bottom: 9px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`

Uppercase16.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Uppercase16
