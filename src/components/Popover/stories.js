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
        orientation="bottom"
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
        orientation="right"
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
  .addWithInfo('Left', () => {
    return (
      <Popover
        orientation="left"
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
        orientation="top"
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
        orientation="top"
        subOrientation="left"
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
        orientation="left"
        subOrientation="top"
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
        orientation="right"
        subOrientation="top"
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
