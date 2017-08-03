import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text16 = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  padding-top: 9px;
  margin-bottom: 9px;
`

Text16.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Text16
