import React, { useState } from 'react'

import { Input } from 'components/Input'
import Button from 'components/Button'

import ControlsGroup from 'components/ControlsGroup'
import { BUTTON_SIZES_NAMES } from 'components/Button/types'

export const InputsGroup = (): JSX.Element => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')

  return (
    <ControlsGroup>
      <Input
        value={firstName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
        placeholder="First Name"
      />
      <Input
        value={lastName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
        placeholder="Last Name"
      />
      <Input
        value={age}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAge(event.target.value)}
        type="number"
        placeholder="age"
      />
    </ControlsGroup>
  )
}

export const DifferentControlsGroup = (): JSX.Element => {
  const [email, setEmail] = useState('')

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

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
}

export const WithStandartInput = (): JSX.Element => {
  const [email, setEmail] = useState('')

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

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
}

export const WithSingleChild = (): JSX.Element => {
  const [email, setEmail] = useState('')

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

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
}

export default {
  title: 'ControlsGroup',
  component: ControlsGroup,
}
