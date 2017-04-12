import { PropTypes } from 'react'
import styled from 'styled-components'

const Text = styled.h1`
  font-size: ${(props) => (props.uppercase ? 11 : 14)}px;
  font-weight: 400;
  line-height: ${(props) => (props.uppercase ? 16 : 18)}px;
  ${(props) => (props.uppercase && 'letter-spacing: 0.6px')}
  margin-bottom: ${(props) => (props.uppercase ? 3 : 6)}px;
  padding-top: 6px;
  ${(props) => (props.uppercase && 'text-transform: uppercase')}
`

Text.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Text
