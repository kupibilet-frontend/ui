import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Box from '../box'

storiesOf('Box', module)
  .addWithInfo('Defalut', () => (
    <Box>
      <p>box content</p>
    </Box>
  ))
