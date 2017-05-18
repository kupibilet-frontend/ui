// @flow

import React, { PureComponent } from 'react'

import {
  StyledSlider,
  StyledHandle,
  StyledProgressBar,
  StyledPitComponent,
} from './styled'

type SliderData = {
  [timeStamp: number]: number,
}

type DefaultProps = {
  pitPoints: string[],
  snap: boolean,
  snapPoints: string[],
  handle: StyledHandle,
  progressBar: StyledProgressBar,
  pitComponent: StyledPitComponent,
  sliderData: SliderData,
}

type Props = {
  min: number,
  max: number,
  snap: boolean,
  values: number[],
  sliderData: SliderData,
  onChange: Function,
}

type State = {
  values: number[],
  pitPoints: number[],
  snapPoints: number[],
  pitHeight: any,
  pitWidth: any,
}

export default class Slider extends PureComponent<DefaultProps, Props, State> {
  constructor(props: Props) {
    super(props)

    const sliderKeys = Object.keys(props.sliderData).map(Number)
    const {
      min = Math.min(...sliderKeys),
      max = Math.max(...sliderKeys),
      values = [-Infinity, Infinity],
    } = props

    const adjustedValues = [
      Math.max(values[0], min),
      Math.min(values[1], max),
    ]

    this.state = {
      min,
      max,
      values: adjustedValues,
      pitPoints: this.getPitPoints(props.sliderData),
      snapPoints: this.getSnapPoints(props),
      pitHeight: this.getPitHeight(props.sliderData),
      pitWidth: this.getPitWidth(props.sliderData),
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.sliderData !== nextProps.sliderData) {
      this.setState({
        pitPoints: this.getPitPoints(nextProps.sliderData),
        pitHeight: this.getPitHeight(nextProps.sliderData),
        pitWidth: this.getPitWidth(nextProps.sliderData),
      })
    } else if (this.props.values !== nextProps.values) {
      this.setState({
        // fallback is used when filter is reset
        values: nextProps.values || [nextProps.min, nextProps.max],
      })
    }
  }

  getPitPoints = (sliderData: SliderData) => {
    const arr = Object.keys(sliderData)
    return arr.slice(0, arr.length - 1).map(Number)
  }

  getSnapPoints = (props: Props) => Object.keys(props.sliderData).map(Number)

  getPitHeight = (sliderData: SliderData) => {
    const maxHeight = Math.max(...Object.values(sliderData))
    const onePercent = maxHeight / 12

    const pitHeight = Object.keys(sliderData).reduce((result, item) => {
      const updatedResult = { ...result }
      updatedResult[item] = sliderData[item] / onePercent
      return updatedResult
    }, {})
    return pitHeight
  }

  getPitWidth = (sliderData: SliderData) =>
    100 / (Object.keys(sliderData).length - 1)

  updateValue = (sliderState) => {
    const { values, min, max } = sliderState
    this.setState({
      values: values || [min, max], // fallback is used when filter is reset
    })
  }

  render() {
    const { state } = this
    const { min, max, values } = state
    const valuesAreDefault = values[0] === min && values[1] === max
    return (
      <StyledSlider
        {...this.props}
        min={min}
        max={max}
        onValuesUpdated={this.updateValue}
        snapPoints={state.snapPoints}
        pitPoints={state.pitPoints}
        values={values}
        pitComponent={(props) =>
          <StyledPitComponent
            {...props}
            pitWidth={state.pitWidth}
            pitHeight={state.pitHeight}
            values={values}
            valuesAreDefault={valuesAreDefault}
          />
        }
      />
    )
  }
}

Slider.defaultProps = {
  pitPoints: [],
  snap: true,
  snapPoints: [],
  handle: StyledHandle,
  progressBar: StyledProgressBar,
  pitComponent: StyledPitComponent,
  sliderData: {},
}
