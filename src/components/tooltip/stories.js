import React from 'react'
import { storiesOf } from '@storybook/react'
import Tooltip from './index'

storiesOf('Tooltip', module)
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
  .add('top tooltip', () => (
    <Tooltip
      position="top"
      color="black"
      title="foobar"
    >
      Tooltip top text
    </Tooltip>
  ))
  .add('bottom tooltip', () => (
    <Tooltip
      position="bottom"
      iconPosition="right"
      color="red"
      title="foobar"
    >
      Tooltip bottom text
    </Tooltip>
  ))
  .add('left tooltip', () => (
    <Tooltip position="left">Tooltip text</Tooltip>
  ))
  .add('right tooltip', () => (
    <Tooltip position="right">Tooltip text</Tooltip>
  ))
  .add('red tooltip', () => (
    <Tooltip color="red">Tooltip text</Tooltip>
  ))
  .add('green tooltip', () => (
    <Tooltip color="green">Tooltip text</Tooltip>
  ))
  .add('tooltip with left icon', () => (
    <Tooltip position="left" iconPosition="left">Tooltip text</Tooltip>
  ))
  .add('tooltip with right icon', () => (
    <Tooltip position="right" iconPosition="right">Tooltip text</Tooltip>
  ))
