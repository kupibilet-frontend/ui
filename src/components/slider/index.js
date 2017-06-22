// @flow

import React, { PureComponent } from 'react'
import initial from 'lodash/initial'
import inRange from 'lodash/inRange'

import RangeBar from './RangeBar'
import HandleWithToolTip from './HandleWithTooltip'

import {
  StyledSlider,
  StyledHandle,
  StyledProgressBar,
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
  pitComponent: RangeBar,
  sliderData: SliderData,
}

type Props = {
  min: number,
  max: number,
  // snap: boolean,
  values: number[],
  sliderData: SliderData,
  // onChange: Function,
  displayValue: string | ((val: number) => string),
  children: any,
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
      values,
    } = props

    // values can be an empty string
    const vals = values || [min, max]

    // clamp values
    const safeValues = [
      Math.max(vals[0], min),
      Math.min(vals[1], max),
    ]

    this.state = {
      min,
      max,
      values: safeValues,
      pitPoints: this.getPitPoints(props.sliderData),
      snapPoints: this.getSnapPoints(props),
      pitHeight: this.getPitHeight(props.sliderData),
      pitWidth: this.getPitWidth(props.sliderData),
      showTooltip: false,
      activeHandles: [],
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.sliderData !== nextProps.sliderData) {
      this.styleCache = {} // invalidate cache on sliderData update
      this.setState({
        pitPoints: this.getPitPoints(nextProps.sliderData),
        pitHeight: this.getPitHeight(nextProps.sliderData),
        pitWidth: this.getPitWidth(nextProps.sliderData),
      })
    } else if (this.props.values !== nextProps.values) {
      const { min, max } = this.state
      this.setState({
        // fallback is used when filter is reset
        values: nextProps.values || [min, max],
      })
    }
  }

  getPitPoints = (sliderData: SliderData) =>
    initial(Object.keys(sliderData)).map(Number)

  getSnapPoints = (props: Props) =>
    Object.keys(props.sliderData).map(Number)

  getPitHeight = (sliderData: SliderData) => {
    const initialVals = initial(Object.values(sliderData))
    const maxHeight = Math.max(...initialVals)
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

  setActiveTooltip = (index) => {
    this.setState({
      activeHandles: [index],
    })
  }

  getHandleWithToolTip = (props) => {
    const key = props['data-handle-key']
    return (
      <HandleWithToolTip
        {...props}
        onMouseDown={(e) => {
          props.onMouseDown(e)
          this.setActiveTooltip(key)
        }}
        showTooltip={this.state.activeHandles.includes(key)}
        displayValue={this.props.displayValue}
      />
    )
  }

  getRangeBar = (props) => {
    // console.log('roo', props)
    const { state, styleCache } = this
    const { children } = props
    const { min, max, values } = state

    const style = styleCache[children] || (styleCache[children] = props.style)
    const valuesAreNotDefault = values[0] !== min || values[1] !== max
    const isHighlighted = valuesAreNotDefault && inRange(children, values[0], values[1])

    return (
      <RangeBar
        {...props}
        style={style}
        pitWidth={state.pitWidth}
        pitHeight={state.pitHeight}
        isHighlighted={isHighlighted}
      />
    )
  }

  styleCache = {}

  updateValue = (sliderState) => {
    const { values, min, max } = sliderState
    this.setState({
      values: values || [min, max], // fallback is used when filter is reset
    })
  }

  handleDragEnd = () => {
    this.setState({
      activeHandles: [],
    })
  }

  render() {
    const { props, state } = this
    const { min, max, values, snapPoints, pitPoints } = state
    const { displayValue, ...sliderProps } = props
    const handle = displayValue ? this.getHandleWithToolTip : StyledHandle
    return (
      <StyledSlider
        {...sliderProps}
        min={min}
        max={max}
        onValuesUpdated={this.updateValue}
        snapPoints={snapPoints}
        pitPoints={pitPoints}
        onSliderDragEnd={this.handleDragEnd}
        values={values}
        handle={handle}
        pitComponent={this.getRangeBar}
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
  pitComponent: RangeBar,
  sliderData: {},
}
