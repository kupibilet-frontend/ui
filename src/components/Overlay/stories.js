import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'components/Box'
import Overlay from './index'

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
