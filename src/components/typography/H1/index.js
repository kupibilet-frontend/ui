import { PropTypes } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 38px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: -1px;
  margin-bottom: 24px;
  padding-top: 30px;
`

H1.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H1
