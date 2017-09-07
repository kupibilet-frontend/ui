// @flow
import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
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
    value: 'some custom value',
    label: 'Супер-заяц купи билет',
  },
  {
    value: 'some custom value2',
    label: 'Кролик-убийца',
  },
]

const allRabbits = [
  {
    value: 'some custom value',
    label: 'Супер-заяц купи билет',
  },
  {
    value: 'some custom value2',
    label: 'Кролик-убийца',
  },
  {
    value: 'some custom value3',
    label: 'Высококонверсионный заяц',
  },
  {
    value: 'some custom value4',
    label: 'Заяц с главной',
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

const onSuggestionSelected = (event, { suggestionValue }) => {
  updateKnob('value', 'text', suggestionValue || '')
}

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
        inputProps={{
          ...defaultInputProps,
          value: text('value', ''),
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
          value: text('value', ''),
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
