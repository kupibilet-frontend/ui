import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from 'components/Header'
import DefaultHeaderLogo from 'components/Header/DefaultHeaderLogo'

// This is an example how we can overwrite the default header
const renderLogo = () => {
  // In real life, here will be `Link` from React Router
  return <DefaultHeaderLogo as="a" href="https://www.kupibilet.ru" />
}

storiesOf('COMPONENTS|Layout/Header', module)
  .add('Header', () => (
    <div style={{ width: '100vw' }}>
      <Header
        renderLogo={renderLogo}
        renderLeftSide={() => <span>Left side</span>}
        renderRightSide={() => <span>Right side</span>}
      />
    </div>
  ))
