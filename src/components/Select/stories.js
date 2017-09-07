// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, object } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'

import withReduxForm from 'storybook/decorators/withReduxForm'
import { Field } from 'redux-form'

import RFSelect, { Select } from 'components/Select'


const inputDefault = {
  type: 'text',
  name: 'input',
  placeholder: 'Купить...',
  error: 'Ошибка',
}

const popularRabbits = [
  {
    customKey: 'some custom value',
    customValue: 'Супер-заяц купи билет',
  },
  {
    customKey: 'some custom value2',
    customValue: 'Кролик-убийца',
  },
]

const allRabbits = [
  {
    customKey: 'some custom value',
    customValue: 'Супер-заяц купи билет',
  },
  {
    customKey: 'some custom value2',
    customValue: 'Кролик-убийца',
  },
  {
    customKey: 'some custom value3',
    customValue: 'Высококонверсионный заяц',
  },
  {
    customKey: 'some custom value4',
    customValue: 'Заяц с главной',
  },
]

const defaultSuggestions = [
  {
    value: 'Самые дешевые',
  },
  {
    value: 'Билеты',
  },
  {
    value: 'Для ваших путешествий',
  },
]

const initialStateSections = {
  suggestions: [
    {
      title: 'Популярные зайцы',
      values: popularRabbits,
    },
    {
      title: 'Все зайцы',
      values: allRabbits,
    },
  ],
  value: '',
}

const initialState = {
  suggestions: defaultSuggestions,
  value: '',
}

const onSuggestionSelected = (event, { suggestion }) => {
  updateKnob('value', 'object', suggestion || { value: '' })
}


const getSimpleKey = (suggestion) => suggestion.value

const getSectionSuggestionKey = (suggestion) => suggestion.customKey
const getSectionSuggestionValue = (suggestion) => suggestion.customValue


storiesOf('Controls/Select', module)
  .addWithInfo('default', () => {
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', null)
    const defaultInputProps = { placeholder, disabled }
    return (
      <Select
        suggestions={initialState.suggestions}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionKey={getSimpleKey}
        inputProps={{
          ...defaultInputProps,
          value: object('value', { value: '' }),
          meta: {
            active: true,
          },
        }}
        error={error}
        success={success}
      />
    )
  })
  .addWithInfo('With custom sections and keys', () => {
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', null)
    const defaultInputProps = { placeholder, disabled }
    return (
      <Select
        suggestions={initialStateSections.suggestions}
        getSuggestionKey={getSectionSuggestionKey}
        getSuggestionValue={getSectionSuggestionValue}
        onSuggestionSelected={onSuggestionSelected}
        inputProps={{
          ...defaultInputProps,
          value: object('value', { value: '' }),
          meta: {
            active: true,
          },
        }}
        multiSection
        error={error}
        success={success}
      />
    )
  })
  .addDecorator(withReduxForm)
  .addWithInfo('With Redux Form', () => {
    return (
      <Field
        suggestions={initialState.suggestions}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionKey={getSimpleKey}
        component={RFSelect}
        placeholder="Купить..."
        name="MadRabbitField"
        label="Пол"
      />

    )
  })
