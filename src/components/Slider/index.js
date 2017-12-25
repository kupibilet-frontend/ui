// @flow
import React from 'react'
import inRange from 'lodash/inRange'

import {
  StyledSlider,
  StyledProgressBar,
  StyledHandle,
  StyledPitComponent,
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


const getPitWidth = ({ min, max }) => ((max - min) / 100)

const getPitPoints = ({ sliderData }) => Object.keys(sliderData)
  .map((key) => key)

const getPitHeight = ({ sliderData }) => {
  const maxHeight = Math.max.apply(null, Object.values(sliderData).map(
    (value) => value),
  )
  const percent = maxHeight / 100
  const result = Object.keys(sliderData).reduce((acc, current) => {
    acc[current] = Math.floor((sliderData[current] / percent))
    return acc
  }, {})
  return result
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
    this.state = {
      ...getInitialState(props),
      pitPoints: getPitPoints(props),
      pitWidth: getPitWidth(props),
      pitHeightData: getPitHeight(props),
    }
    this.touched = false
  }

  onChange = (sliderState : SliderState) => {
    const { onChange } = this.props
    if (onChange) onChange(sliderState.values)
  }

  /* eslint-disable react/prop-types */

  getPitComponent = (props) => {
    const { values } = this.state
    const { children } = props
    const { touched } = this
    const isHighlighted = touched && inRange(children, values[0], values[1])

    return (
      <StyledPitComponent
        {...props}
        isHighlighted={isHighlighted}
        pitWidth={this.state.pitWidth}
        pitHeightData={this.state.pitHeightData}
      />
    )
  }

  /* eslint-enable react/prop-types */

  updateValues = (sliderState : SliderState) => {
    const { onValuesUpdated } = this.props
    const { values } = sliderState
    this.touched = true
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
    const {
      pitPoints,
    } = this.state

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
        pitComponent={this.getPitComponent}
        pitPoints={pitPoints}
      />
    )
  }
}
