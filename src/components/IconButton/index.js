// @flow

import React from 'react'
import type { Node } from 'react'
import Icon from 'components/Icon'

import { StyledIconButton, StyledTooltip } from './styled'

type Props = {
  onClick: Function,
  withTooltip?: boolean,
  children: Node,
  iconName?: string,
  color?: string,
}

const defaultProps = {
  withTooltip: true,
  iconName: 'cross',
  color: 'fail',
}

const IconButton = ({
  children,
  withTooltip,
  iconName,
  color,
  onClick,
}: Props) => {
  return (
    <StyledIconButton
      onClick={onClick}
      withTooltip={withTooltip}
      iconName={iconName}
      color={color}
    >
      {
        withTooltip && (
          <StyledTooltip>
            {children}
          </StyledTooltip>
        )
      }
      <Icon size="xxsmall" name={iconName} fill={color} />
    </StyledIconButton>
  )
}

IconButton.defaultProps = defaultProps

export default IconButton
