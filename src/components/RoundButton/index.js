// @flow

import React from 'react'
import type { Node } from 'react'
import Icon from 'components/Icon'

import { StyledRoundButton, StyledTooltip } from './styled'

type Props = {
  onClick?: () => null,
  shouldRenderTooltip?: boolean,
  children: Node,
  iconName?: string,
  themeColor?: string,
}

const defaultProps = {
  onClick: () => null,
  shouldRenderTooltip: true,
  iconName: 'cross',
  themeColor: 'fail',
}

const RoundButton = ({
  children,
  shouldRenderTooltip,
  iconName,
  themeColor,
  onClick,
}: Props) => {
  return (
    <StyledRoundButton
      onClick={onClick}
      shouldRenderTooltip={shouldRenderTooltip}
      iconName={iconName}
      themeColor={themeColor}
    >
      {
        shouldRenderTooltip && (
          <StyledTooltip>
            {children}
          </StyledTooltip>
        )
      }
      <Icon size="xxsmall" name={iconName} fill={themeColor} />
    </StyledRoundButton>
  )
}

RoundButton.defaultProps = defaultProps

export default RoundButton
