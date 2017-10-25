import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'components/Box'
import ControlsGroup from 'components/ControlsGroup'

storiesOf('Blocks', module)
  .addWithInfo('Box', () => (
    <Box>
      box content
    </Box>
  ))

  .addWithInfo('GroupedBox', () => (
    <ControlsGroup vertical>
      <Box>
        box content
      </Box>
      <Box>
        box content
      </Box>
      <Box>
        box content
      </Box>
      <Box>
        box content
      </Box>
    </ControlsGroup>
  ))
