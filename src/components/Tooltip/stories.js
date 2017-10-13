import React from 'react'
import { storiesOf } from '@storybook/react'
import Tooltip from 'components/Tooltip'
import Button from 'components/Button'
import Icon from 'components/Icon'


storiesOf('Controls/Tooltip', module)
  .addWithInfo('default', () => {
    return (
      <Tooltip
        content="Купи билет. Или два"
        orientation="bottom"
      >
        <Button
          icon={
            <Icon name="carrot_monochrome" inheritColor />
          }
        />
      </Tooltip>
    )
  })
  .addWithInfo('Right&Successful', () => {
    return (
      <Tooltip
        orientation="right"
        success
        content="Высококонверсионный заяц доволен"
      >
        <div>
           (Нет)
        </div>
      </Tooltip>
    )
  })
  .addWithInfo('Left&Error', () => {
    return (
      <Tooltip
        orientation="left"
        error
        content="Зайчику грустно"
      >
        <div style={{ lineHeight: 1, width: '100px', height: '25px', background: 'blue' }}>
           Не смотри на зайчика
        </div>
      </Tooltip>
    )
  })
  .addWithInfo('Top', () => {
    return (
      <Tooltip
        orientation="top"
        content="Высококонверсионный заяц следит за тобой. Длинная строка."
      >
        <Button
          icon={
            <Icon name="carrot_monochrome" inheritColor />
          }
        />
      </Tooltip>
    )
  })
