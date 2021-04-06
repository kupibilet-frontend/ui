import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
// @ts-ignore TODO add storybook folder to ts config
import updateKnob from 'storybook/updateKnob'

import { Input } from 'components/Input'
import Button from 'components/Button'

import ControlsGroup from 'components/ControlsGroup'
import { BUTTON_SIZES_NAMES } from 'components/Button/types'

function createOnChangeHandler(fieldName: string, fieldType: string) {
  return function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    updateKnob(fieldName, fieldType, event.target.value)
  }
}

storiesOf('ControlsGroup', module)
  .add('Inputs group', () => {
    const firstName = text('firstName', '')
    const lastName = text('lastName', '')
    const age = text('age', '')

    const onFirstNameChange = createOnChangeHandler('firstName', 'text')
    const onLastNameChange = createOnChangeHandler('lastName', 'text')
    const onAgeChange = createOnChangeHandler('age', 'number')

    return (
      <ControlsGroup>
        <Input
          value={firstName}
          onChange={onFirstNameChange}
          placeholder="First Name"
        />
        <Input
          value={lastName}
          onChange={onLastNameChange}
          placeholder="Last Name"
        />
        <Input
          value={age}
          onChange={onAgeChange}
          type="number"
          placeholder="age"
        />
      </ControlsGroup>
    )
  })
  .add('Different controls group', () => {
    const email = text('email', '')
    const onEmailChange = createOnChangeHandler('email', 'text')

    return (
      <ControlsGroup>
        <Button size={BUTTON_SIZES_NAMES.large}>
        Пойти
        </Button>
        <Input
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
        />
        <Button size={BUTTON_SIZES_NAMES.large}>
        Найти
        </Button>
      </ControlsGroup>
    )
  })
  .add('With standart input', () => {
    const email = text('email', '')
    const onEmailChange = createOnChangeHandler('email', 'text')

    return (
      <>
        <ControlsGroup>
          <Input
            value={email}
            onChange={onEmailChange}
            placeholder="Email"
          />
          <Button size={BUTTON_SIZES_NAMES.large}>
          Подписаться
          </Button>
        </ControlsGroup>
      </>
    )
  })
  .add('With single child', () => {
    const email = text('email', '')
    const onEmailChange = createOnChangeHandler('email', 'text')

    return (
      <>
        <ControlsGroup>
          <Input
            value={email}
            onChange={onEmailChange}
            placeholder="Email"
          />
        </ControlsGroup>
      </>
    )
  })
