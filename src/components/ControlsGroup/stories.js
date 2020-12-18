import React from 'react'
import { storiesOf } from '@storybook/react'

import { Input } from 'components/Input'
import Button from 'components/Button'
import ControlsGroup from 'components/ControlsGroup'

/* eslint-disable no-console */
storiesOf('COMPONENTS|Complex controls/ControlsGroup', module)
  .add('Inputs group', () => (
    <ControlsGroup>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input type="number" placeholder="age" />
    </ControlsGroup>
  ))
  .add('Different controls group', () => (
    <ControlsGroup>
      <Button size="large">
        Пойти
      </Button>
      <Input placeholder="Email" />
      <Button size="large">
        Найти
      </Button>
    </ControlsGroup>
  ))

  .add('With standart input', () => (
    <>
      <ControlsGroup>
        <Input placeholder="Email" />
        <Button size="large">
          Подписаться
        </Button>
      </ControlsGroup>
    </>
  ))
