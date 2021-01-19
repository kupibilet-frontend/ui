import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'components/Box'

storiesOf('COMPONENTS|Layout/Box', module)
  .add('Default', () => (
    <Box>
      <p>box content</p>
    </Box>
  ))
