import { PropTypes } from 'react'
import styled from 'styled-components'

const H5 = styled.h5`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.1px;
  ${(props) => (props.verticalRythm &&
    `margin-bottom: 6px;
     padding-top: 6px;`
  )}
`

H5.defaultProps = {
  verticalRythm: false,
}

H5.propTypes = {
  children: PropTypes.node.isRequired,
  verticalRythm: PropTypes.bool,
}

export default H5
