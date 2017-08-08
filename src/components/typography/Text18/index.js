import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text18 = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  padding-top: 18px;
  margin-bottom: 12px;
`

Text18.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Text18
