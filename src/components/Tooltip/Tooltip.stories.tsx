import React from 'react'
import Tooltip from 'components/Tooltip'
import Button from 'components/Button'
import Icon from 'components/Icon'
import { useArgs } from '@storybook/client-api'
import { Story } from '@storybook/react'
import { TTooltipProps } from './types'

const DEFAULT_ARGS = {
  content: 'Высококонверсионный заяц следит за длинной строкой.',
  placement: 'bottom',
  success: false,
  error: false,
}

const TooltipTemplate = (): JSX.Element => {
  const [{ content, placement, success, error }] = useArgs()

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
}

export const DefaultTooltip: Story<TTooltipProps> = TooltipTemplate.bind({})
DefaultTooltip.args = {
  ...DEFAULT_ARGS as TTooltipProps,
}

export default {
  title: 'Tooltip',
  component: Tooltip,
}
