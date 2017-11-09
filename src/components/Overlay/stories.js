import React from 'react'
import { storiesOf } from '@storybook/react'
import Overlay from './index'
import Box from 'components/Box'

storiesOf('Overlay', module)
  .addWithInfo('Defalut', () => {
    return (
      <Overlay>
        <Box>
          <p>Overlay Content</p>
        </Box>
      </Overlay>
    )
  })
