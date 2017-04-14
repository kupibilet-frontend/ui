import React, { PropTypes } from 'react'
import { StyledSlider, StyledHandle, StyledProgressBar, StyledPitComponent } from './styled'


class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      values: props.values || [0],
      pitPoints: this.getPitPoints(props.sliderData),
      snapPoints: this.getSnapPoints(props),
      pitHeight: this.getPitHeight(props.sliderData),
      pitWidth: this.getPitWidth(props.sliderData),
    }

    this.updateValue = this.updateValue.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.sliderData !== nextProps.sliderData) {
      this.setState({
        pitPoints: this.getPitPoints(nextProps.sliderData),
      })
      this.setState({
        pitHeight: this.getPitHeight(nextProps.sliderData),
      })
      this.setState({
        pitWidth: this.getPitWidth(nextProps.sliderData),
      })
    }

    if (this.props.step !== nextProps.step) {
      this.setState({
        snapPoints: this.getSnapPoints(nextProps),
      })
    }
  }

  getPitPoints = (sliderData) => (
    Object.keys(sliderData)
  )

  getSnapPoints = (props) => {
    const snapPointsArray = [props.values[0]] // чтобы ползунок возвращался на первую позицию
    let i = props.min
    while (i < props.max) {
      snapPointsArray.push(i += props.step)
    }
    return snapPointsArray
  }

  getPitHeight = (sliderData) => {
    const maxHeight = Math.max(...Object.values(sliderData))
    const onePercent = maxHeight / 12

    const pitHeight = Object.keys(sliderData).reduce((result, item) => {
      const updatedResult = { ...result }
      updatedResult[item] = sliderData[item] / onePercent
      return updatedResult
    }, {})
    return pitHeight
  }

  getPitWidth = (sliderData) => {
    const width = 100 / Object.keys(sliderData).length
    return width
  }

  updateValue(sliderState) {
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

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  snap: PropTypes.bool,
  values: PropTypes.arrayOf(PropTypes.number),
  sliderData: PropTypes.object,
  step: PropTypes.number,
}

export default Slider
