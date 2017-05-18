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
}

type Props = {
  min: number,
  max: number,
  snap: bool,
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
    } else if (this.props.values !== nextProps.values) {
      this.setState({
        // fallback is used when filter is reset
        values: nextProps.values || [nextProps.min, nextProps.max],
      })
    }
  }

  getPitPoints = (sliderData: SliderData) => Object.keys(sliderData).map(Number)

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

  getPitWidth = (sliderData: SliderData) => {
    const width = 100 / Object.keys(sliderData).length
    return width
  }

  updateValue = (sliderState) => {
    const { values, min, max } = sliderState
    this.setState({
      values: values || [min, max], // fallback is used when filter is reset
    })
  }

  render() {
    const { props, state } = this
    return (
      <StyledSlider
        {...props}
        onValuesUpdated={this.updateValue}
        snapPoints={state.snapPoints}
        pitPoints={state.pitPoints}
        values={state.values}
        pitComponent={(props) =>
          <StyledPitComponent
            {...props}
            pitWidth={state.pitWidth}
            pitHeight={state.pitHeight}
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
}
