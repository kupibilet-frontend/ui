import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Comments from 'components/Comments'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`

storiesOf('COMPONENTS|Controls/Comments', module)
  .add('Default', () => (
    <Wrapper>
      <Comments />
    </Wrapper>
  ))
