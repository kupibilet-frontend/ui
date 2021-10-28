import React, { useState, useEffect, useRef } from 'react'
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


export const PropControlledTooltip: Story<TTooltipProps> = (): JSX.Element => {
  const [isTooltipOpen, setTooltipStatus] = useState<boolean>(false)
  const tooltipTimeout = useRef<number | null>(null)


  function onButtonClick(): void {
    if (isTooltipOpen || Boolean(tooltipTimeout.current)) return

    setTooltipStatus(true)

    tooltipTimeout.current = window.setTimeout(() => {
      setTooltipStatus(false)
      tooltipTimeout.current = null
    }, 3000)
  }

  // clear timeout
  useEffect(() => (): void => {
    if (tooltipTimeout.current !== null) window.clearTimeout(tooltipTimeout.current)
  }, [])

  return (
    <Tooltip
      content="Hello! I will dissapear in just 3 seconds"
      placement="top"
      isOpen={isTooltipOpen}
    >
      <Button onClick={onButtonClick} variant="secondary">
        Click me to show tooltip!
      </Button>
    </Tooltip>
  )
}

export default {
  title: 'Tooltip',
  component: Tooltip,
}
