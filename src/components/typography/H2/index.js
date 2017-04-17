import PropTypes from 'prop-types'
import styled from 'styled-components'

const H2 = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: -0.6px;
  ${(props) => (props.verticalRythm &&
    `margin-bottom: 18px;
     padding-top: 24px;`
  )}
`

H2.defaultProps = {
  verticalRythm: false,
}

H2.propTypes = {
  children: PropTypes.node.isRequired,
  verticalRythm: PropTypes.bool,
}

export default H2
