import PropTypes from 'prop-types'
import styled from 'styled-components'

const H5 = styled.h5`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  padding-top: 18px;
  margin-bottom: 12px;
  letter-spacing: -0.2px;
`

H5.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H5
