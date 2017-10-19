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
        placement="bottom"
      >
        <Button
          icon={
            <Icon name="carrot_monochrome" inheritColor />
          }
        />
      </Tooltip>
    )
  })
  .addWithInfo('Right&Successful&shouldRender', () => {
    return (
      <Tooltip
        placement="right"
        success
        content="Высококонверсионный заяц доволен"
        shouldRender={(1 > 0 && 2 < 3)}
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
        placement="left"
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
        placement="top"
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
