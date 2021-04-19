import React from 'react'
import styled from 'styled-components'
import { select, boolean, text } from '@storybook/addon-knobs'
import Tooltip from 'components/Tooltip'
import Button from 'components/Button'
import Icon from 'components/Icon'
import { Placement } from '@popperjs/core'

const placements = ['top', 'bottom', 'left', 'right']

export const TooltipExample = (): JSX.Element => {
  const content = text('content', 'Высококонверсионный заяц следит за длинной строкой.')
  const placement = select('placement', placements, 'top')
  const success = boolean('success', false)
  const error = Boolean(boolean('error', false))

  return (
    <Tooltip
      content={content}
      placement={placement as Placement}
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
}

TooltipExample.story = {
  name: 'Tooltip',
}

export const StyledTooltipExample = (): JSX.Element => {
  const content = text('content', 'Высококонверсионный заяц следит за длинной строкой.')
  const placement = select('placement', placements, 'bottom')
  const success = boolean('success', false)
  const error = Boolean(boolean('error', false))
  const StyledTooltip = styled(Tooltip)`
    display: inline-block;
    border: 3px solid red;
  `

  return (
    <StyledTooltip
      content={content}
      placement={placement as Placement}
      success={success}
      error={error}
    >
      <Button
        icon={
          <Icon name="carrot_monochrome" inheritColor />
        }
      />
    </StyledTooltip>
  )
}

StyledTooltipExample.story = {
  name: 'Styled Tooltip',
}

export default {
  title: 'Tooltip',
  parameters: {
    component: Tooltip,
    componentSubtitle: `import { TogglerItem, TogglerGroup } from '@kupibilet/ui/components/Toggler'`,
  },
}
