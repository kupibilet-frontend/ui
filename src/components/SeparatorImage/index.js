import React from 'react'
import styled from 'styled-components'

const Separator = styled.div`
  width: 100%;
  height: 188px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${({ image }) => `url("${image}")`};
  background-position: center center;
`

const SeparatorImage = (props) => <Separator {...props} />

export default SeparatorImage
