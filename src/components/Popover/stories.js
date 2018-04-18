import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean, text } from '@storybook/addon-knobs'
import Popover from 'components/Popover'
import Button from 'components/Button'
import Icon from 'components/Icon'

const getContent = () => (
  <div>
    {text(
      'content',
      'Премия в области научно-популярной литературы «Просветитель» \n' +
        'была учреждена основателем и почетным президентом.'
    )}
  </div>
)

const getPlacement = () =>
  select('placement', ['top', 'bottom', 'left', 'right'], 'top')

const getAlign = () => {
  const placement = getPlacement()
  if (['top', 'bottom'].includes(placement)) {
    return select(
      'align',
      {
        '': 'null (default)',
        left: 'left',
      },
      'left'
    )
  }

  return select(
    'align',
    {
      '': 'null (default)',
      top: 'top',
    },
    'top'
  )
}

const CarrotButton = props => (
  <Button icon={<Icon name="carrot_monochrome" inheritColor />} {...props} />
)

storiesOf('Controls/Popover', module)
  .addWithInfo('default', () => {
    const content = getContent()
    const placement = getPlacement()

    return (
      <Popover content={content} placement={placement}>
        <CarrotButton />
      </Popover>
    )
  })
  .addWithInfo('With Header&Large', () => {
    const header = text('header', 'Красивый зайчик в шоке')
    const content = getContent()
    const placement = getPlacement()

    return (
      <Popover
        placement={placement}
        header={header}
        content={content}
        size="large"
      >
        <CarrotButton />
      </Popover>
    )
  })
  .addWithInfo(
    'With `align` prop',
    `
      >>> **Align just works like 'align-items' in flex-box and can't be in same direction with 'placement' prop**
    `,
    () => {
      const content = getContent()
      const placement = getPlacement()
      const align = getAlign()

      return (
        <Popover content={content} placement={placement} align={align}>
          <CarrotButton />
        </Popover>
      )
    }
  )
  .addWithInfo(
    'With `dotCentering` prop',
    `
      >>> I don't realy understand what this prop can do, but Selutin said very like this feature
    `,
    () => {
      const content = getContent()
      const placement = getPlacement()
      const align = getAlign()
      const dotCentering = boolean('dotCentering', true)

      return (
        <Popover
          content={content}
          placement={placement}
          align={align}
          dotCentering={dotCentering}
        >
          <Icon name="cross" fill="miscDark" />
        </Popover>
      )
    }
  )
