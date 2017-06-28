
// @flow
import React, { PureComponent } from 'react'
import HandleWithToolTip from './HandleWithTooltip'


type Props = {
  isActiveHandle: boolean,
  displayValue: string | ((val: number) => string),
  setActiveTooltip: (key: string) => void,
  onMouseDown: (e: any) => void,
}

class HandleWithTooltipForSlider extends PureComponent<Props> {

  onMouseDown = (e) => {
    const { props } = this
    props.onMouseDown(e)
    props.setActiveTooltip(props['data-handle-key'])
  }

  render() {
    const {
      isActiveHandle,
      displayValue,
      ...props
    } = this.props
    return (
      <HandleWithToolTip
        {...props}
        showTooltip={isActiveHandle}
        displayValue={displayValue}
        onMouseDown={this.onMouseDown}
      />
    )
  }
}

export default HandleWithTooltipForSlider
