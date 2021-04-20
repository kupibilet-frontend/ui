import React from 'react'
import styled from 'styled-components'
import Tooltip, { TProps } from 'components/Tooltip'
import Button from 'components/Button'
import Icon from 'components/Icon'
import { useArgs } from '@storybook/client-api'
import { Story } from '@storybook/react'

const StyledTooltipWrap = styled(Tooltip)`
    display: inline-block;
    border: 3px solid red;
  `

const DEFAULT_ARGS = {
  content: 'Высококонверсионный заяц следит за длинной строкой.',
  placement: 'bottom',
  success: false,
  error: false,
}

const TooltipTemplate = (args: TProps): JSX.Element => {
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

export const DefaultTooltip: Story<TProps> = TooltipTemplate.bind({})
DefaultTooltip.args = {
  ...DEFAULT_ARGS as TProps,
}

DefaultTooltip.storyName = 'Tooltip'

const StyledTooltipTemplate = (args: TProps): JSX.Element => {
  const [{ content, placement, success, error }] = useArgs()

  return (
    <StyledTooltipWrap
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
    </StyledTooltipWrap>
  )
}

export const StyledTooltip: Story<TProps> = StyledTooltipTemplate.bind({})
StyledTooltip.args = {
  ...DEFAULT_ARGS as TProps,
}

export default {
  title: 'Tooltip',
  parameters: {
    component: Tooltip,
    componentSubtitle: `import { TogglerItem, TogglerGroup } from '@kupibilet/ui/components/Toggler'`,
  },
}
