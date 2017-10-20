import React from 'react'
import { storiesOf } from '@storybook/react'
import Popover from 'components/Popover'
import Button from 'components/Button'
import Icon from 'components/Icon'


storiesOf('Controls/Popover', module)
  .addWithInfo('default', () => {
    return (
      <Popover
        content={
          <div>
            Премия в области научно-популярной литературы «Просветитель»
            была учреждена основателем и почетным президентом.
          </div>
        }
        placement="bottom"
      >
        <Button
          icon={
            <Icon name="carrot_monochrome" inheritColor />
          }
        />
      </Popover>
    )
  })
  .addWithInfo('Right', () => {
    return (
      <Popover
        placement="right"
        content={
          <div>
            Премия в области научно-популярной литературы «Просветитель»
            была учреждена основателем и почетным президентом.
          </div>
        }
      >
        <div>
           (Нет)
        </div>
      </Popover>
    )
  })
  .addWithInfo('Left&ShouldRender', () => {
    return (
      <Popover
        placement="left"
        shouldRender={(1 > 0 && 2 < 3)}
        content={
          <div>
            Премия в области научно-популярной литературы «Просветитель»
            была учреждена основателем и почетным президентом.
          </div>
        }
      >
        <div style={{ lineHeight: 1, width: '100px', height: '25px', background: 'blue' }}>
           Не смотри на зайчика
        </div>
      </Popover>
    )
  })
  .addWithInfo('Top&Header', () => {
    return (
      <Popover
        placement="top"
        header="Красивый зайчик в шоке"
        content={
          <div>
            Премия в области научно-популярной литературы «Просветитель»
            была учреждена основателем и почетным президентом.
          </div>
        }
      >
        <Button
          icon={
            <Icon name="carrot_monochrome" inheritColor />
          }
        />
      </Popover>
    )
  })

  .addWithInfo('Top&Left', () => {
    return (
      <Popover
        placement="top"
        align="left"
        content={
          <div>
            Премия в области научно-популярной литературы «Просветитель»
            была учреждена основателем и почетным президентом.
          </div>
        }
      >
        <Button
          icon={
            <Icon name="carrot_monochrome" inheritColor />
          }
        />
      </Popover>
    )
  })

  .addWithInfo('Bottom&Left', () => {
    return (
      <Popover
        placement="bottom"
        align="left"
        content={
          <div>
            Премия в области научно-популярной литературы «Просветитель»
            была учреждена основателем и почетным президентом.
          </div>
        }
      >
        <Button
          icon={
            <Icon name="carrot_monochrome" inheritColor />
          }
        />
      </Popover>
    )
  })

  .addWithInfo('Left&Top&Header', () => {
    return (
      <Popover
        placement="left"
        align="top"
        header="Красивый зайчик"
        content={
          <div>
            Премия в области научно-популярной литературы «Просветитель»
            была учреждена основателем и почетным президентом.
          </div>
        }
      >
        <div style={{ lineHeight: 1, width: '100px', height: '25px', background: 'blue' }}>
           Не смотри на зайчика
        </div>
      </Popover>
    )
  })
  .addWithInfo('Right&Top', () => {
    return (
      <Popover
        placement="right"
        align="top"
        content={
          <div>
            Премия в области научно-популярной литературы «Просветитель»
            была учреждена основателем и почетным президентом.
          </div>
        }
      >
        <div>
           (Нет)
        </div>
      </Popover>
    )
  })
  .addWithInfo('DotCentering&Left&Top', () => {
    return (
      <Popover
        placement="left"
        align="top"
        dotCentering
        content={
          <div>
            Премия в области научно-популярной литературы «Просветитель»
            была учреждена основателем и почетным президентом.
          </div>
        }
      >
        <Icon
          name="cross"
          fill="miscDark"
        />
      </Popover>
    )
  })
  .addWithInfo('DotCentering&Top', () => {
    return (
      <Popover
        placement="top"
        dotCentering
        content={
          <div>
            Премия в области научно-популярной литературы «Просветитель»
            была учреждена основателем и почетным президентом.
          </div>
        }
      >
        <Icon
          name="cross"
          fill="miscDark"
        />
      </Popover>
    )
  })
