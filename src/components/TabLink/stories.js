import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import TabLink from 'components/TabLink'


storiesOf('Controls/TabLink', module)
  .addWithInfo('default', () => {
    const isActive = boolean('isActive', false)
    return (
      <TabLink isActive={isActive}>
        Авиабилеты
      </TabLink>
    )
  })
