import React from 'react'
import Icon from 'components/Icon'
import { ICON_SIZES } from 'components/Icon/consts'
import { TButtonSize } from './types'

const BUTTON_SIZE_TO_ICON_MAP: Record<TButtonSize, ICON_SIZES> = {
  small: ICON_SIZES.xxsmall,
  medium: ICON_SIZES.normal,
  large: ICON_SIZES.normal,
}

function cloneIconWithSize(icon: React.ReactNode, size: TButtonSize): JSX.Element {
  const sizeByMap = BUTTON_SIZE_TO_ICON_MAP[size]

  if (React.isValidElement(icon)) {
    return (
      React.cloneElement(icon, {
        size: icon.props.size || sizeByMap,
      })
    )
  }

  return (
    <Icon name={icon as string} size={sizeByMap} inheritColor />
  )
}

export default cloneIconWithSize
