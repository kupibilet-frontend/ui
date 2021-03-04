import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean, text } from '@storybook/addon-knobs'
import Tooltip from 'components/Tooltip'
import Button from 'components/Button'
import Icon from 'components/Icon'
import { TPlacement } from './types'

const placements = ['top', 'bottom', 'left', 'right']

storiesOf('COMPONENTS|Controls/Tooltip', module)
  .add('default', () => {
    const content = text('content', 'Высококонверсионный заяц следит за длинной строкой.')
    const placement = select('placement', placements, 'bottom') as TPlacement
    const success = boolean('success', false)
    // Fix knobs inside jest snapshot runner
    const error = Boolean(boolean('error', false))

    return (
      <Tooltip
        content={content}
        placement={placement}
        success={success}
        error={error}
      >
        <Button
          icon={
            <Icon name="carrot_monochrome" inheritColor />
          }
        />
      </Tooltip>
    )
  })
