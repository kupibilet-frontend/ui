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

type SliderData = {
  ['pitPoint' : number]: number,
}

type HeightData = {
  ['pitPoint' : number]: number,
}

type State = {
  values: SliderValues,
  pitPoints: Array<number>,
  pitWidth: number,
  pitHeightData: HeightData,
}

type SliderState = {
  min: number,
  max: number,
  values: SliderValues,
}

type Props = {
  min: number,
  max: number,
  values?: SliderValues,
  disabled: boolean,
  snap?: boolean,
  snapPoints?: Array<number>,
  sliderData?: SliderData,
  progressBar: () => Element,
  handle: () => Element,
  onChange?: (SliderValues) => void,
  onValuesUpdated?: (SliderValues) => void,
}

type GetPitWidth = (SliderData) => number | null

const getPitWidth : GetPitWidth = ({ min, max, sliderData }) => (sliderData
  ? (100 / (max - min))
  : null
)

type GetPitPoints = (SliderData) => Array<number> | undefined

const getPitPoints : GetPitPoints = ({
  sliderData,
}) => (sliderData
  ? Object.keys(sliderData)
    .map((key) => Number(key))
  : undefined
)

type GetPitHeight = (SliderData) => HeightData

const getPitHeight : GetPitHeight = ({
  sliderData,
}) => {
  const maxHeight = Math.max.apply(null, Object.values(sliderData))
  const percent = maxHeight / 100
  return Object.keys(sliderData).reduce((acc, current) => {
    acc[current] = Math.floor((sliderData[current] / percent))
    return acc
  }, {})
}

type GetInitialValues = (Props) => Array<number>

const getInitialValues : GetInitialValues = (props : Props) => {
  const { min, max, values } = props
  return values || [min, max]
}

type PitProps = {
  children: number,
  pitWidth: number,
  pitHeightData: HeightData,
  style: Object,
  isHighlighted: boolean,
}

class PitComponent extends React.PureComponent <PitProps, void> {
  render() {
    const {
      children,
      pitWidth,
      pitHeightData,
      isHighlighted,
      style,
    } = this.props
    return (
      <StyledPitComponent
        style={{
          ...style,
          height: `${pitHeightData[children]}%`,
        }}
        isHighlighted={isHighlighted}
        pitWidth={pitWidth}
      />
    )
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
  constructor(props : Props) {
    super(props)
    this.state = {
      values: getInitialValues(props),
      pitPoints: getPitPoints(props),
      pitWidth: getPitWidth(props),
      pitHeightData: props.sliderData ? getPitHeight(props) : null,
    }
    this.touched = false
  }

  onChange = (sliderState : SliderState) => {
    const { onChange } = this.props
    if (onChange) onChange(sliderState.values)
  }

  /* eslint-disable react/prop-types */
  /* eslint-disable react/no-children-prop */

  getPitComponent = (props : Props) => {
    const { values } = this.state
    const { children } = props
    const { touched } = this
    const isHighlighted : boolean = touched && inRange(children, values[0], values[1])

    return (
      <PitComponent
        style={props.style}
        children={props.children}
        pitWidth={this.state.pitWidth}
        pitHeightData={this.state.pitHeightData}
        isHighlighted={isHighlighted}
      />
    )
  }

  /* eslint-enable react/prop-types */
  /* eslint-enable react/no-children-prop */

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
