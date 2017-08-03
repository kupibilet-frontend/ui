import PropTypes from 'prop-types'
import styled from 'styled-components'

const H4 = styled.h4`
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.4px;
  padding-top: 18px;
  margin-bottom: 12px;
`

H4.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H4
