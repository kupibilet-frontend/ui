import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { select, text, boolean } from '@kadira/storybook-addon-knobs'
import updateKnob from '../../utils/updateKnob'
import Input from './index'
import ControlsGroup from '../controls-group'
import Icon from '../icons'
import Dropdown from '../dropdown'

const inputDefault = {
  type: 'text',
  name: 'input',
  placeholder: 'Только прямые рейсы',
  error: 'Только латинские буквы',
}

const sizesSelect = (defaultValue = 'large') => select(
  'size',
  {
    large: 'Large',
    normal: 'Normal',
    small: 'Small',
  },
  defaultValue,
)

storiesOf('Input', module)
  .addWithInfo('default', () => {
    const placeholder = text('placeholder', 'Только прямые рейсы')

    return (
      <Input
        type={inputDefault.type}
        name={inputDefault.name}
        size={sizesSelect()}
        placeholder={placeholder}
      />
    )
  })
  .addWithInfo('disabled', () => {
    const disabled = boolean('disabled', true)

    return (
      <Input
        type={inputDefault.type}
        name={inputDefault.name}
        disabled={disabled}
        size={sizesSelect()}
        placeholder={inputDefault.placeholder}
      />
    )
  })
  .addWithInfo('success', () => {
    const success = boolean('success', true)

    return (
      <Input
        type={inputDefault.type}
        name={inputDefault.name}
        success={success}
        size={sizesSelect()}
        placeholder={inputDefault.placeholder}
      />
    )
  })
  .addWithInfo('error', () => {
    const error = text('error', inputDefault.error)

    return (
      <Input
        type={inputDefault.type}
        name={inputDefault.name}
        error={error}
        size={sizesSelect()}
        placeholder={inputDefault.placeholder}
      />
    )
  })
  .addWithInfo('padding for one icon', () => {
    const positionLeft = boolean('left', false)

    return (
      positionLeft ?
        <Input
          className="has-badge"
          type={inputDefault.type}
          name={inputDefault.name}
          size={sizesSelect()}
          placeholder={inputDefault.placeholder}
          leftIcon={
            <Icon name="checkbox" stroke="small" fill="text" />
          }
        /> :
        <Input
          className="has-badge"
          type={inputDefault.type}
          name={inputDefault.name}
          size={sizesSelect()}
          placeholder={inputDefault.placeholder}
          rightIcon={
            <Icon name="checkbox" stroke="small" fill="text" />
          }
        />
    )
  })
  .addWithInfo('select', () => {
    const isOpen = boolean('isOpen', false)
    const onToggle = (event, value) => {
      event.preventDefault()
      updateKnob('isOpen', 'boolean', value)
    }

    return (
      <Input
        className="has-badge"
        type={inputDefault.type}
        name={inputDefault.name}
        size={sizesSelect()}
        placeholder={inputDefault.placeholder}
        positioDropdown="right"
        isDropdown={isOpen}
        onToggleDropdown={onToggle}
      />
    )
  })
  .addWithInfo('dropdown', () => {
    const isOpen = boolean('isOpen', false)
    const onToggle = (event, value) => {
      event.preventDefault()
      updateKnob('isOpen', 'boolean', value)
    }

    return (
      <div>
        <Input
          className="has-badge"
          type={inputDefault.type}
          name={inputDefault.name}
          size={sizesSelect()}
          placeholder={inputDefault.placeholder}
          positioDropdown="right"
          isDropdown={isOpen}
          onToggleDropdown={onToggle}
        />
        <Dropdown
          overlay={<div>1234</div>}
          onToggle={onToggle}
          isOpen={isOpen}
        >
          { <span /> }
        </Dropdown>
      </div>
    )
  })
  .addWithInfo('group', () => (
    <ControlsGroup>
      <Input
        type={inputDefault.type}
        name={inputDefault.name}
        size={sizesSelect()}
        placeholder={inputDefault.placeholder}
      />
      <Input
        type={inputDefault.type}
        name={inputDefault.name}
        size={sizesSelect()}
        placeholder={inputDefault.placeholder}
      />
      <Input
        type={inputDefault.type}
        name={inputDefault.name}
        size={sizesSelect()}
        placeholder={inputDefault.placeholder}
      />
    </ControlsGroup>
  ))
