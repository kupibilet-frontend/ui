import React, { PropTypes } from 'react'
import { storiesOf } from '@kadira/storybook'
import Slider from './index'
import { StyledPitComponent } from './styled'

const startDate = new Date(2017, 3, 2, 1).valueOf()
const endDate = new Date(2017, 3, 2, 2).valueOf()

const snapPoints = [startDate] // startDate чтобы ползунок возвращался обратно
let i = startDate
while (i < endDate) {
  snapPoints.push(i += 900000)
}

const pitPoints = snapPoints.slice(0, snapPoints.length - 1)

const ticketsCount = {
  1491084000000: 3,
  1491084900000: 10,
  1491085800000: 0,
  1491086700000: 2,
}

const objValues = Object.values(ticketsCount)
const maxHeight = Math.max(...objValues)
const width = 100 / objValues.length
const onePercent = maxHeight / 12

const pitHeight = Object.keys(ticketsCount).reduce((result, item, key) => {
  const updatedResult = { ...result }
  updatedResult[item] = objValues[key] / onePercent
  return updatedResult
}, {})


class LabeledSlider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      values: props.values || [0],
    }

    this.updateValue = this.updateValue.bind(this)
  }

  updateValue(sliderState) {
    this.setState({
      values: sliderState.values,
    })
  }

  render() {
    return (
      <div style={{ width: '252px' }}>
        <Slider
          {...this.props}
          onValuesUpdated={this.updateValue}
          min={startDate}
          max={endDate}
          snap
          snapPoints={snapPoints}
          pitPoints={pitPoints}
          values={this.state.values}
          pitComponent={(props) =>
            <StyledPitComponent
              {...props}
              pitWidth={width}
              pitHeight={pitHeight}
            />
          }
        />
      </div>
    )
  }
}

LabeledSlider.defaultProps = {
  values: [],
}

LabeledSlider.propTypes = {
  values: PropTypes.array,
}


storiesOf('Slider', module)
  .addWithInfo('Slider', () => (
    <LabeledSlider values={[startDate, endDate]} />
  ))
