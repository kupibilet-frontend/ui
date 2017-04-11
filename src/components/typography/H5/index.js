import { PropTypes } from 'react'
import styled from 'styled-components'

const H5 = styled.h1`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.1px;
  margin-bottom: 6px;
  padding-top: 6px;
`

H5.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H5
