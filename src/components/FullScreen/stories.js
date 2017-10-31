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
      width: 100%;
    `

    return (
      <FullScreen
        header="Заголовок в несколько строк"
        content={
          <ContentFullScreen>
            Full Screen Content
          </ContentFullScreen>
        }
        submitText="Закрыть"
        cancelText="Отменить"
      >
        {buttonFullScreen}
      </FullScreen>
    )
  })
