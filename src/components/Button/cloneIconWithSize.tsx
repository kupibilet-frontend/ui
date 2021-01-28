import React from 'react'
import Icon from 'components/Icon'
import { ICON_SIZES } from 'components/Icon/consts'
import { BUTTON_SIZES_NAMES, TIconArg } from './types'

const BUTTON_SIZE_TO_ICON_MAP = {
  [BUTTON_SIZES_NAMES.small]: ICON_SIZES.xxsmall,
  [BUTTON_SIZES_NAMES.normal]: ICON_SIZES.normal,
  [BUTTON_SIZES_NAMES.large]: ICON_SIZES.normal,
}

function cloneIconWithSize(icon: TIconArg, size: BUTTON_SIZES_NAMES): JSX.Element {
  const sizeByMap: ICON_SIZES = BUTTON_SIZE_TO_ICON_MAP[size]

  if (React.isValidElement(icon)) {
    return (
      React.cloneElement(icon, {
        // @ts-ignore:
        // Argument of type '{ size: any; }' is not assignable to
        // parameter of type 'Partial<unknown> & Attributes'
        size: icon.props.size || sizeByMap,
      })
    )
  }

  return (
    <Icon name={icon as string} size={sizeByMap} inheritColor />
  )
}

export default cloneIconWithSize
