import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from 'components/Header'

const leftSide = <span style={{ marginLeft: '18px' }}>Left side</span>
const rightSide = <span>Right side</span>
const CustomComponent = 'a' // In real life we'll use Link from React Router

storiesOf('Complex controls/Header', module)
  .addWithInfo('Header', () => (
    <div style={{ width: '100vw' }}>
      <Header
        leftSide={leftSide}
        rightSide={rightSide}
        logoLinkComponent={CustomComponent}
        logoLinkParams={{ href: 'https://kupibilet.ru', rel: 'nofollow', title: 'Go to Kupibilet.ru' }}
      />
    </div>
  ))
