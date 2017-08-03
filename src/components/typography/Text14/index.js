import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text14 = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-top: 6px;
  margin-bottom: 6px;
`

Text14.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Text14
