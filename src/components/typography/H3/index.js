import PropTypes from 'prop-types'
import styled from 'styled-components'

const H3 = styled.h3`
  font-size: 30px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: -0.6px;
  padding-top: 24px;
  margin-bottom: 18px;
`

H3.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H3
