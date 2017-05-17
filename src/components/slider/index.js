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
  min: number,
  max: number,
  pitPoints: string[],
  snap: boolean,
  snapPoints: string[],
  values: [number, number],
  handle: StyledHandle,
  progressBar: StyledProgressBar,
  pitComponent: StyledPitComponent,
  sliderData: SliderData,
  step: number,
}

type Props = {
  min: number,
  max: number,
  snap: bool,
  values: number[],
  sliderData: SliderData,
  step: number,
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
    const { min, max } = props

    this.state = {
      values: props.values || [min, max],
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
    }

    if (this.props.step !== nextProps.step) {
      this.setState({
        snapPoints: this.getSnapPoints(nextProps),
      })
    }
  }

  getPitPoints = (sliderData: SliderData) => Object.keys(sliderData)

  getSnapPoints = (props: Props) => {
    const snapPointsArray = [props.min] // чтобы ползунок возвращался на первую позицию
    let i = props.min
    while (i < props.max) {
      snapPointsArray.push(i += props.step)
    }
    return snapPointsArray
  }

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

  getPitWidth = (sliderData: SliderData) => {
    const width = 100 / Object.keys(sliderData).length
    return width
  }

  updateValue = (sliderState) => {
    this.setState({
      values: sliderState.values,
    })
  }

  render() {
    const {
      min,
      max,
      snap,
      step,
      onChange,
    } = this.props

    return (
      <StyledSlider
        {...this.props}
        onValuesUpdated={this.updateValue}
        min={min}
        max={max}
        snap={snap}
        snapPoints={this.state.snapPoints}
        pitPoints={this.state.pitPoints}
        values={this.state.values}
        step={step}
        pitComponent={(props) =>
          <StyledPitComponent
            {...props}
            pitWidth={this.state.pitWidth}
            pitHeight={this.state.pitHeight}
          />
        }
      />
    )
  }
}

Slider.defaultProps = {
  min: 0,
  max: 100,
  pitPoints: [],
  snap: true,
  snapPoints: [],
  values: [0, 100],
  handle: StyledHandle,
  progressBar: StyledProgressBar,
  pitComponent: StyledPitComponent,
  sliderData: {},
  step: 0,
}
