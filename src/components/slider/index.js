import { PropTypes } from 'react'
import { Slider, StyledHandle, StyledProgressBar, StyledPitComponent } from './styled'

Slider.defaultProps = {
  min: 0,
  max: 100,
  pitPoints: [],
  snap: false,
  snapPoints: [],
  values: [0, 100],
  handle: StyledHandle,
  progressBar: StyledProgressBar,
  pitComponent: StyledPitComponent,
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
