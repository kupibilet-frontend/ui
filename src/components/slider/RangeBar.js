import React, { PureComponent } from 'react'
import { StyledPitComponent } from './styled'

export default class RangeBar extends PureComponent {
  render() {
    return (
      <StyledPitComponent {...this.props} />
    )
  }
}
