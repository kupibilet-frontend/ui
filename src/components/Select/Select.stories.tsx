import React, { useState } from 'react'
import { Select } from 'components/Select'
import { TSuggestion, ReactAutosuggest } from 'components/Autocomplete'
import { Story } from '@storybook/react'

const allRabbits = [
  {
    key: 'some custom value',
    value: 'Супер-заяц купи билет',
  },
  {
    key: 'some custom value2',
    value: 'Кролик-убийца',
  },
  {
    key: 'some custom value3',
    value: 'Высококонверсионный заяц',
  },
  {
    key: 'some custom value4',
    value: 'Заяц с главной',
  },
]

const popularRabbits = [
  {
    key: 'some custom value',
    value: 'Супер-заяц купи билет',
  },
  {
    key: 'some custom value2',
    value: 'Кролик-убийца',
  },
]

const initialStateSections = [
  {
    title: 'Популярные зайцы',
    values: popularRabbits,
  },
  {
    title: 'Все зайцы',
    values: allRabbits,
  },
]

interface TProps {
  suggestions: TSuggestion[],
  multiSection: boolean,
  error: string | null,
}

const SelectTemplate: Story<TProps> = ({
  suggestions,
  multiSection,
  error,
}: TProps) => {
  const [value, setValue] = useState('')

  const onSuggestionSelected: ReactAutosuggest.OnSuggestionSelected<TSuggestion> = (
    event,
    { suggestion },
  ) => {
    setValue(suggestion as unknown as string)
  }

  return (
    <Select
      suggestions={suggestions}
      onSuggestionSelected={onSuggestionSelected}
      selectedSuggestion={value as unknown as TSuggestion}
      // @ts-ignore
      inputProps={{
        placeholder: 'Купить...',
        error,
        value,
        meta: {
          active: true,
        },
      }}
      multiSection={multiSection}
    />
  )
}

export const DefaultSelect = SelectTemplate.bind({})
DefaultSelect.args = {
  multiSection: false,
  suggestions: allRabbits,
  error: null,
}

export const WithSections = SelectTemplate.bind({})
WithSections.args = {
  multiSection: true,
  suggestions: initialStateSections,
  error: null,
}

export const WithErrorSelect = SelectTemplate.bind({})
WithErrorSelect.args = {
  multiSection: false,
  suggestions: allRabbits,
  error: 'Ошибка...',
}

export default {
  component: Select,
  title: 'Select',
  argTypes: {
    multiSection: { table: { disable: true } },
  },
}
