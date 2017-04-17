import { PropTypes } from 'react'
import styled from 'styled-components'

const H4 = styled.h4`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: ${(props) => (props.uppercase ? 0.4 : -0.2)}px;
  ${(props) => (props.uppercase && 'text-transform: uppercase')}
  ${(props) => (props.verticalRythm &&
    `margin-bottom: 6px;
     padding-top: 12px;`
  )}
`

H4.defaultProps = {
  verticalRythm: false,
  uppercase: false,
}

H4.propTypes = {
  children: PropTypes.node.isRequired,
  verticalRythm: PropTypes.bool,
  uppercase: PropTypes.bool,
}

export default H4
