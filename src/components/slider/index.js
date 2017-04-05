import React, { PropTypes } from 'react'
import { RheostatWrapper, StyledHandle, StyledProgressBar, StyledPitComponent } from './styled'

function Slider(props) {
  return (
    <RheostatWrapper
      handle={StyledHandle}
      progressBar={StyledProgressBar}
      pitComponent={StyledPitComponent}
      min={props.min}
      max={props.max}
      pitPoints={props.pitPoints}
      snap={props.snap}
      snapPoints={props.snapPoints}
      values={props.values}
    />
  )
}

Slider.defaultProps = {
  min: 0,
  max: 100,
  pitPoints: [],
  snap: false,
  snapPoints: [],
  values: [0, 100],
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  pitPoints: PropTypes.arrayOf(PropTypes.number),
  snap: PropTypes.bool,
  snapPoints: PropTypes.arrayOf(PropTypes.number),
  values: PropTypes.arrayOf(PropTypes.number),
}

export default Slider
