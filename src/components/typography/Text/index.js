import { PropTypes } from 'react'
import styled from 'styled-components'

const Text = styled.span`
  font-weight: 400;
  font-size: ${(props) => (props.uppercase ? 11 : 14)}px;
  line-height: ${(props) => (props.uppercase ? 16 : 18)}px;
  ${(props) => (props.uppercase &&
    `letter-spacing: 0.6px;
     text-transform: uppercase;
    `
  )}
  ${(props) => (props.verticalRythm &&
    `margin-bottom: ${(props.uppercase ? 3 : 6)}px;
     padding-top: 6px;`
  )}
`

Text.defaultProps = {
  verticalRythm: false,
  uppercase: false,
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  verticalRythm: PropTypes.bool,
  uppercase: PropTypes.bool,
}

export default Text
