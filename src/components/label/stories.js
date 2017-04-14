import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { boolean } from '@kadira/storybook-addon-knobs'
import Label from './index'

storiesOf('Label', module)
  .addWithInfo('default', () => {
    const horizonal = boolean('horizonal', true)

    return (
      <Label
        horizonal={horizonal}
        className={`label ${horizonal ? 'horizonal' : ''}`}
      />
    )
  })
