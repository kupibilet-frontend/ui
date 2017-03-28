import React, { PropTypes } from 'react'
import styled from 'styled-components'

export const BoxWrapper = styled.div`
  background: ${({ theme }) => (theme.color.background)};
  border: 1px solid ${({ theme }) => (theme.color.miscLighter)};
  border-radius: 6px;
  width: 252px;
`

function Box(props) {
  return (
    <BoxWrapper>{props.children}</BoxWrapper>
  )
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Box
