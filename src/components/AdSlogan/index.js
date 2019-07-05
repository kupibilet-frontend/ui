// @flow
import React, { PureComponent } from 'react'
import {
  SloganCard,
  SloganImg,
  SloganTitle,
} from './styled'

type Props = {
  name: string,
  text: string,
  src: string,
}

class AdSlogan extends PureComponent<Props> {
  render() {
    const { name, text, src } = this.props
    return (
      <SloganCard key={`${name}`} {...this.props}>
        <SloganImg name={name} src={src} />
        <SloganTitle>
          {text}
        </SloganTitle>
      </SloganCard>
    )
  }
}

export default AdSlogan
