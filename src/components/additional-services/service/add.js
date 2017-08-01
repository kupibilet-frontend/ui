// @flow
import React from 'react'
import styled from 'styled-components'

import Base from './base'

const Root = styled.div`
  color: #007acc;
`

type Props = {
  onClick: () => void,
}

const Add = (props: Props) => (
  <Root>
    <Base
      {...props}
      text="Добавить"
      symbol="+"
    />
  </Root>
)

export default Add
