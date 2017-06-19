/* eslint-disable no-nested-ternary */

import React, { PureComponent } from 'react'
import Tooltip from '../tooltip'
import { StyledHandle } from './styled'


type Props = {
  displayValue: string | ((val: number) => string),
}

export default class HandleWithToolTip extends PureComponent<Props> {
  render() {
    const { displayValue, ...props } = this.props
    const label = typeof displayValue === 'string'
      ? displayValue
      : typeof displayValue === 'function'
      ? displayValue(props['aria-valuenow'])
      : ''

    return (
      <div>
        <Tooltip
          startDelay={0}
          position="top"
          color="black"
          title={label}
          zIndex={2}
          hasHandle
          {...props}
        >
          <StyledHandle
            {...props}
            hasTooltip
          />
        </Tooltip>
      </div>
    )
  }
}
