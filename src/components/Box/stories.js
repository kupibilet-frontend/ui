import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'components/Box'

storiesOf('Blocks', module)
  .add('Box', () => (
    <Box>
      <p>box content</p>
    </Box>
  ))
