import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import FullScreen from 'components/FullScreen'
import Button from 'components/Button'

storiesOf('Full Screen', module)
  .addWithInfo('Defalut', () => {
    const buttonFullScreen = <Button>Open FullScreen</Button>
    const ContentFullScreen = styled.div`
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
    `

    const onClick = () => {
      return console.log('TEST')
    }

    return (
      <FullScreen
        header="Full Screen Header"
        content={
          <ContentFullScreen>
            Full Screen Content
          </ContentFullScreen>
        }
        trigger={buttonFullScreen}
        onClick={onClick}
      />
    )
  })
