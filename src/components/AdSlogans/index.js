// @flow
import React, { PureComponent } from 'react'
import {
  StyledSlogans,
  SloganCard,
  SloganImg,
  SloganTitle,
} from './styled'

type Slogan = {
  name: string,
  text: string,
}

type Props = {
  slogans: [Slogan],
}

class AdSlogans extends PureComponent<Props> {
  renderSloganCard = ({ name, text, src }) => (
    <SloganCard key={`${name}`}>
      <SloganImg name={name} src={src} />
      <SloganTitle className="no-global">
        {text}
      </SloganTitle>
    </SloganCard>
  )

  render() {
    const { slogans } = this.props
    return (
      <StyledSlogans>
        {slogans.map(this.renderSloganCard)}
      </StyledSlogans>
    )
  }
}

export default AdSlogans
