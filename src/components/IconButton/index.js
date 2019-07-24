// @flow

import React from 'react'
import Icon from 'components/Icon'

import { StyledIconButton } from './styled'

type Props = {
  withTooltip?: boolean,
  iconName?: string,
  color?: string,
}

const defaultProps = {
  withTooltip: true,
  iconName: 'cross',
  color: 'fail',
}

const IconButton = ({ withTooltip, iconName, color }: Props) => {
  return (
    <StyledIconButton
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
