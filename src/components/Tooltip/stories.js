import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { select, text } from '@storybook/addon-knobs'
import Tooltip from 'components/Tooltip'
import Button from 'components/Button'

const Story = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
`

const PLACEMENTS = ['', 'top', 'bottom', 'left', 'right']
const ALIGN_POSITIONS = ['', 'left', 'right']
const LONG_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit amet facilisis. Cras sed felis eget velit aliquet. Ornare quam viverra orci sagittis. Donec ultrices tincidunt arcu non sodales neque sodales ut.'

storiesOf('COMPONENTS|Controls/Tooltip', module)
  .add('Default', () => {
    const content = text('content', 'Высококонверсионный заяц следит за длинной строкой.')
    const placement = select('placement', PLACEMENTS, 'bottom')
    const align = select('align', ALIGN_POSITIONS, '')

    return (
      <Story>
        <Tooltip
          content={content}
          placement={placement}
          align={align}
        >
          <Button>
            Hover me!
          </Button>
        </Tooltip>
      </Story>
    )
  })
  .add('With header', () => {
    const header = text('header', 'header')
    const content = text('content', 'Высококонверсионный заяц следит за длинной строкой.')
    const placement = select('placement', PLACEMENTS, 'top')
    const align = select('align', ALIGN_POSITIONS, '')

    return (
      <Tooltip
        content={content}
        placement={placement}
        header={header}
        align={align}
      >
        <Button>
          Hover me!
        </Button>
      </Tooltip>
    )
  })
  .add('Long text', () => {
    const content = text('content', LONG_TEXT)
    const placement = select('placement', PLACEMENTS, 'bottom')
    const align = select('align', ALIGN_POSITIONS, '')

    return (
      <Tooltip
        content={content}
        placement={placement}
        align={align}
      >
        <Button>
          Hover me!
        </Button>
      </Tooltip>
    )
  })
  .add('Long text, has maxWidth', () => {
    const content = text('content', LONG_TEXT)
    const placement = select('placement', PLACEMENTS, 'bottom')
    const align = select('align', ALIGN_POSITIONS, '')

    return (
      <Tooltip
        content={content}
        placement={placement}
        align={align}
        maxWidth={400}
      >
        <Button>
          Hover me!
        </Button>
      </Tooltip>
    )
  })
