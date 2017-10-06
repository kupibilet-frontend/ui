import React from 'react'
import { storiesOf } from '@storybook/react'
import Tooltip from 'components/Tooltip'


storiesOf('Controls/Tooltip', module)
  .addWithInfo('default', () => {
    return (
      <Tooltip>
        <div>
           Не смотри на зайчика
        </div>
      </Tooltip>
    )
  })
