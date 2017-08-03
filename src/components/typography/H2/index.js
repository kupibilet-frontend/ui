import PropTypes from 'prop-types'
import styled from 'styled-components'

const H2 = styled.h2`
  font-size: 38px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: -1px;
  padding-top: 24px;
  margin-bottom: 18px;
`

H2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H2
