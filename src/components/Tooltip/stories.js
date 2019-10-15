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

const PLACEMENTS = ['', 'top', 'bottom']
const ALIGN_POSITIONS = ['', 'left', 'right']

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
