// @flow
import React from 'react'

import {
  StyledSlider,
  StyledProgressBar,
  StyledHandle,
} from './styled'

/* eslint-disable react/no-unused-prop-types */

type SliderValues = Array<number>

type State = {
  values: SliderValues,
}

type SliderState = {
  min: number,
  max: number,
  values: SliderValues,
}

type Props = {
  min: number,
  max: number,
  values: SliderValues,
  disabled: boolean,
  snap: boolean,
  snapPoints: Array<number>,
  progressBar: () => Element,
  handle: () => Element,
  onChange?: (SliderValues) => void,
  onValuesUpdated?: (SliderValues) => void,
}

const getInitialState = (props : Props) => {
  const { min, max, values } = props
  return values
    ? {
      values,
    }
    : {
      values: [min, max],
    }
}

export default class Slider extends React.Component<Props, State> {
  static defaultProps = {
    handle: StyledHandle,
    progressBar: StyledProgressBar,
    min: 1,
    max: 100,
    disabled: false,
  }
  constructor(props) {
    super(props)
    this.state = getInitialState(props)
  }

  onChange = (sliderState : SliderState) => {
    const { onChange } = this.props
    if (onChange) onChange(sliderState.values)
  }

  updateValues = (sliderState : SliderState) => {
    const { onValuesUpdated } = this.props
    const { values } = sliderState
    this.setState({
      values,
    })
    if (onValuesUpdated) onValuesUpdated(values)
  }

  render() {
    const {
      handle,
      progressBar,
      min,
      max,
      disabled,
      snap,
      snapPoints,
    } = this.props
    return (
      <StyledSlider
        min={min}
        max={max}
        disabled={disabled}
        onValuesUpdated={this.updateValues}
        onChange={this.onChange}
        values={this.state.values}
        handle={handle}
        progressBar={progressBar}
        snap={snap}
        snapPoints={snapPoints}
      />
    )
  }
}
