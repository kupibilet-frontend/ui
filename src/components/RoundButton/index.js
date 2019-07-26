// @flow

import React from 'react'
import type { Node } from 'react'
import Icon from 'components/Icon'

import { StyledRoundButton, StyledTooltip } from './styled'

type Props = {
  onClick: () => null,
  shouldRenderTooltip?: boolean,
  children: Node,
  iconName?: string,
  buttonColor?: string,
}

const defaultProps = {
  shouldRenderTooltip: true,
  iconName: 'cross',
  buttonColor: 'fail',
}

const RoundButton = ({
  children,
  shouldRenderTooltip,
  iconName,
  buttonColor,
  onClick,
}: Props) => {
  return (
    <StyledRoundButton
      onClick={onClick}
      shouldRenderTooltip={shouldRenderTooltip}
      iconName={iconName}
      buttonColor={buttonColor}
    >
      {
        shouldRenderTooltip && (
          <StyledTooltip>
            {children}
          </StyledTooltip>
        )
      }
      <Icon size="xxsmall" name={iconName} fill={buttonColor} />
    </StyledRoundButton>
  )
}

RoundButton.defaultProps = defaultProps

export default RoundButton
