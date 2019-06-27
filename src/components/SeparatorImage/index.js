import React from 'react'
import styled from 'styled-components'
import mq from 'utils/media-queries'

const Separator = styled.div`
  width: 100%;
  height: 188px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${({ image }) => `url(${image})`};
  background-position: center center;
  ${mq.mobile`
   background-position: 79% 50%;
   background-size: cover;
  `}
`

const SeparatorImage = (props) => <Separator {...props} />

export default SeparatorImage
