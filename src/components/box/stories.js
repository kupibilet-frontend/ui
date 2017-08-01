import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'components/box'

storiesOf('Box', module)
  .addWithInfo('Defalut', () => (
    <Box>
      <p>box content</p>
    </Box>
  ))
