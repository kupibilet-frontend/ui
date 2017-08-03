import PropTypes from 'prop-types'
import styled from 'styled-components'

const Uppercase20 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  padding-top: 18px;
  margin-bottom: 12px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`

Uppercase20.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Uppercase20
