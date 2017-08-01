// @flow
import React from 'react'
import styled from 'styled-components'

import Base from './base'

const Root = styled.div`
  font-weight: 600;
  color: #23c256;
`

const Free = (props) => (
  <Root>
    <Base
      {...props}
      text="Бесплатно"
      symbol="✓"
    />
  </Root>
)

export default Free
