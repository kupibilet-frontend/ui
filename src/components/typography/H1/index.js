import { PropTypes } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 38px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: -1px;
  ${(props) => (props.verticalRythm &&
    `margin-bottom: 24px;
     padding-top: 30px;`
  )}
`

H1.defaultProps = {
  verticalRythm: false,
}

H1.propTypes = {
  children: PropTypes.node.isRequired,
  verticalRythm: PropTypes.bool,
}

export default H1
