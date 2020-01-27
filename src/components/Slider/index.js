// @flow
import React from 'react'
import noop from 'lodash/noop'
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
  ['pitPoint': number]: number,
}

type HeightData = {
  ['pitPoint': number]: number,
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
  values: SliderValues,
  disabled: boolean,
  snap?: boolean,
  snapPoints?: Array<number>,
  sliderData: SliderData,
  progressBar?: () => Element,
  handle?: () => Element,
  onChange?: (SliderValues) => void,
  onValuesUpdated?: (SliderValues) => void,
}

type GetPitWidth = (SliderData) => number | null

const getPitWidth: GetPitWidth = ({ min, max, sliderData }) => (sliderData
  ? (100 / (max - min))
  : null
)

type GetPitPoints = (SliderData) => Array<number> | undefined

const getPitPoints: GetPitPoints = ({
  sliderData,
}) => (sliderData
  ? Object.keys(sliderData)
    .map((key: string) => Number(key))
  : undefined
)

type GetPitHeight = (SliderData) => HeightData

const getPitHeight: GetPitHeight = ({
  sliderData,
}) => {
  const maxHeight = Math.max(...Object.values(sliderData))
  const percent = maxHeight / 100
  return Object.keys(sliderData).reduce((acc, current) => ({
    ...acc,
    [current]: Math.floor((sliderData[current] / percent)),
  }), {})
}

type GetInitialValues = (Props) => Array<number>

const getInitialValues: GetInitialValues = (props: Props) => {
  const { min, max, values } = props
  return values || [min, max]
}

type PitProps = {
  pitId: number,
  pitWidth: number,
  pitHeightData: HeightData,
  style: Object,
  isHighlighted: boolean,
}

class PitComponent extends React.PureComponent <PitProps, void> {
  render() {
    const {
      pitId,
      pitWidth,
      pitHeightData,
      isHighlighted,
      style,
    } = this.props
    return (
      <StyledPitComponent
        style={{
          ...style,
          height: `${pitHeightData[pitId]}%`,
        }}
        isHighlighted={isHighlighted}
        pitWidth={pitWidth}
      />
    )
  }
}

export default class Slider extends React.Component<Props, State> {
  // TODO add an opportunity to pass custom PitComponent
  static defaultProps = {
    handle: () => <StyledHandle />,
    progressBar: () => <StyledProgressBar />,
    min: 1,
    max: 100,
    disabled: false,
    onChange: noop,
    onValuesUpdated: noop,
    values: [],
    sliderData: {},
    snap: undefined,
    snapPoints: undefined,
  }
  constructor(props: Props) {
    super(props)
    this.state = {
      values: getInitialValues(props),
      pitPoints: getPitPoints(props),
      pitWidth: getPitWidth(props),
      pitHeightData: props.sliderData ? getPitHeight(props) : null,
      touched: false,
    }
  }

  // eslint-disable-next-line camelcase, react/sort-comp
  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    if (this.props.values) {
      const nextValues = nextProps.values
      const currentValues = this.props.values
      const firstChanged = currentValues[0] !== nextValues[0]
      const secondChanged = currentValues[1] !== nextValues[1]
      if (firstChanged || secondChanged) {
        this.setState({
          values: nextValues,
          touched: true,
        })
      }
    }
  }

  onChange = (sliderState: SliderState) => {
    const { onChange } = this.props
    if (onChange) onChange(sliderState.values)
  }

  /* eslint-disable react/prop-types */

  getPitComponent = (props: Props) => {
    const { values, touched } = this.state
    const { children } = props
    const isHighlighted: boolean = touched && inRange(children, ...values)

    return (
      <PitComponent
        style={props.style}
        pitId={props.children}
        pitWidth={this.state.pitWidth}
        pitHeightData={this.state.pitHeightData}
        isHighlighted={isHighlighted}
      />
    )
  }

  /* eslint-enable react/prop-types */

  updateValues = (sliderState: SliderState) => {
    const { onValuesUpdated } = this.props
    const { values } = sliderState
    this.setState({
      values,
      touched: true,
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
