// @flow
import React from 'react'

import {
  StyledSlider,
  StyledProgressBar,
  StyledHandle,
} from './styled'


export default class Slider extends React.Component<void, void> {
  static defaultProps = {
    progressBar: StyledProgressBar,
    handle: StyledHandle,
  }
  state = {
    values: [1, 100],
  }

  updateValues = (sliderState) => {
    console.info(sliderState.values)
    this.setState({
      values: sliderState.values,
    })
  }

  render() {
    return (
      <StyledSlider
        min={1}
        max={100}
        onValuesUpdated={this.updateValues}
        values={this.state.values}
        handle={StyledHandle}
        progressBar={StyledProgressBar}
      />
    )
  }
}
