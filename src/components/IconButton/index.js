// @flow

import React from 'react'
import Icon from 'components/Icon'

import { StyledIconButton } from './styled'

type Props = {
  onClick: Function,
  withTooltip?: boolean,
  iconName?: string,
  color?: string,
}

const defaultProps = {
  withTooltip: true,
  iconName: 'cross',
  color: 'fail',
}

const IconButton = ({ withTooltip, iconName, color, onClick }: Props) => {
  return (
    <StyledIconButton
      onClick={onClick}
      withTooltip={withTooltip}
      iconName={iconName}
      color={color}
    >
      <Icon size="xxsmall" name={iconName} fill={color} />
    </StyledIconButton>
  )
}

IconButton.defaultProps = defaultProps

export default IconButton
