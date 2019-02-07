import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import Header from 'components/Header'

const withTopBorder = () => boolean('withTopBorder', true)
const innerMaxWidth = () => text('innerMaxWidth', '666px')

const leftSide = <span style={{ marginLeft: '18px' }}>Left side</span>
const rightSide = <span>Right side</span>

storiesOf('Complex controls/Header', module)
  .addWithInfo('Header', () => (
    <div style={{ width: '100vw' }}>
      <Header
        withTopBorder={withTopBorder()}
        innerMaxWidth={innerMaxWidth()}
        leftSide={leftSide}
        rightSide={rightSide}
        logoLinkComponent="a"
        logoLinkParams={{ href: 'https://kupibilet.ru', rel: 'nofollow', title: 'Go to Kupibilet.ru' }}
      />
    </div>
  ))
