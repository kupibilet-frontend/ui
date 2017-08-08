import PropTypes from 'prop-types'
import styled from 'styled-components'

const H6 = styled.h6`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  padding-top: 18px;
  margin-bottom: 12px;
  letter-spacing: -0.1px;
`

H6.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H6
