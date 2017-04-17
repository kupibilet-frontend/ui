import { PropTypes } from 'react'
import styled from 'styled-components'

const H3 = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.4px;
  ${(props) => (props.verticalRythm &&
    `margin-bottom: 12px;
     padding-top: 18px;`
  )}
`

H3.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H3
