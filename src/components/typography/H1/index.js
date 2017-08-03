import PropTypes from 'prop-types'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 44px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -1.2px;
  padding-top: 12px
  margin-bottom: 24px
`

H1.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H1
