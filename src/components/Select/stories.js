// @flow
import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { text, boolean, object } from '@storybook/addon-knobs'
import updateKnob from 'utils/updateKnob'

import Select from 'components/Select'

const SectionHeader = styled.div`
  height: 30px;
  line-height: 30px;
  padding-left: 9px;
  color: ${({ theme }) => theme.color.miscDark};
`

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
      suggestions: popularRabbits,
    },
    {
      title: 'Все зайцы',
      suggestions: allRabbits,
    },
  ],
  value: '',
}

const initialState = {
  suggestions: defaultSuggestions,
  value: '',
}

const renderSectionTitle = (section) => (
  <SectionHeader>
    {section.title}
  </SectionHeader>
)

const onSuggestionSelected = (event, { suggestion }) => {
  updateKnob('value', 'object', suggestion || { value: '' })
}

const getSimpleKey = (suggestion) => suggestion.value

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
  .addWithInfo('Custom suggestion select handler', () => {
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', null)
    const defaultInputProps = { placeholder, disabled }

    return (
      <Select
        suggestions={initialState.suggestions}
        inputProps={{
          ...defaultInputProps,
          value: object('value', { value: '' }),
          meta: {
            active: true,
          },
        }}
        onSuggestionSelected={onSuggestionSelected}
        error={error}
        success={success}
      />
    )
  })
  .addWithInfo('With custom sections', () => {
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', null)
    const defaultInputProps = { placeholder, disabled }
    return (
      <Select
        suggestions={initialStateSections.suggestions}
        inputProps={{
          ...defaultInputProps,
          value: text('value', ''),
          meta: {
            active: true,
          },
        }}
        multiSection
        renderSectionTitle={renderSectionTitle}
        error={error}
        success={success}
      />
    )
  })
