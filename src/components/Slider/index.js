// @flow
import React from 'react'

import {
  StyledSlider,
  StyledProgressBar,
  StyledHandle,
} from './styled'

/* eslint-disable react/no-unused-prop-types */

type State = {
  values: Array
}

type Props = {
  min: number,
  max: number,
  progressBar: () => Element,
  handle: () => Element,
  onChange?: () => [],
  initState?: (number, number) => State
}

type SliderState = {
  min: number,
  max: number,
  values: [],
}

const getInitialState = (props : Props) => {
  const { min, max, initState } = props
  return initState
    ? initState(min, max)
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
    const { values } = sliderState
    this.setState({
      values,
    })
  }

  render() {
    const { handle, progressBar, min, max } = this.props
    return (
      <StyledSlider
        min={min}
        max={max}
        onValuesUpdated={this.updateValues}
        onChange={this.onChange}
        values={this.state.values}
        handle={handle}
        progressBar={progressBar}
      />
    )
  }
}
