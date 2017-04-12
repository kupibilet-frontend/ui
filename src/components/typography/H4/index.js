import { PropTypes } from 'react'
import styled from 'styled-components'

const H4 = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: ${(props) => (props.uppercase ? 0.4 : -0.2)}px;
  margin-bottom: 6px;
  padding-top: 12px;
  ${(props) => (props.uppercase && 'text-transform: uppercase')}
`

H4.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H4
