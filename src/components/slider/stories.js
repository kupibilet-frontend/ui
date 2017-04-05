import React from 'react'
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
          pitComponent={() => <StyledPitComponent ticketsCount={ticketsCount} />}
        />
      </div>
    )
  }
}


storiesOf('Slider', module)
  .addWithInfo('Slider', () => (
    <LabeledSlider values={[startDate, endDate]} />
  ))
