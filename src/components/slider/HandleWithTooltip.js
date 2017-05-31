import React from 'react'
import Tooltip from '../tooltip'
import { StyledHandle } from './styled'


type Props = {
  displayValue: string | ((val: number) => string),
}

export default function HandleWithToolTip({ displayValue, ...props }: Props) {
  const label = typeof displayValue === 'string'
    ? displayValue
    : typeof displayValue === 'function'
    ? displayValue(props['aria-valuenow'])
    : ''
  return (
    <Tooltip
      position="top"
      color="black"
      title={label}
      {...props}
    >
      <StyledHandle {...props} />
    </Tooltip>
  )
}
