import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Button from './index'

storiesOf('Buttons', module)
  .addDecorator((story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      {story()}
    </div>
  ))
  .add('Button', () => (
    <Button>Авиабилеты</Button>
  ))
