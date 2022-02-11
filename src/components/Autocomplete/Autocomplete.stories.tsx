import React, { useState } from 'react'
import Autocomplete, { TProps, TSuggestion, ReactAutosuggest, TSection } from 'components/Autocomplete'
import Suggestion from 'components/Suggestion'
import { Input, TProps as TPropsInput } from 'components/Input'
import { Story } from '@storybook/react'
import groupBy from 'lodash/groupBy'
import get from 'lodash/get'
import _throttle from 'lodash/throttle'
import styled from 'styled-components'
import Icon from 'components/Icon'

export interface TOnChange {
  newValue: string;
  suggestion: TSuggestion;
  method: string;
}

const getMultiSectionSuggestions = (suggestions: TSuggestion) => {
  const suggestsGroupByCountry = Object.entries(
    groupBy(suggestions,
      (suggest) => get(suggest, 'country', 'Нет страны')),
  )

  return suggestsGroupByCountry.map(([country, cities]) => ({
    title: country,
    values: cities,
  }))
}

const SectionHeader = styled.div`
  height: 30px;
  line-height: 30px;
  padding-left: 9px;
  color: ${({ theme }) => theme.color.misc500};
`

const customRenderSectionTitle = (section: TSection) => (
  <SectionHeader>
    {section.title}
  </SectionHeader>
)

const AutocompleteTemplate: Story<TProps> = ({
  multiSection,
  renderSectionTitle,
  renderInputComponent = ({ ref, ...props }: any) => <Input ref={ref} {...props} />,
}: TProps) => {
  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState<TSuggestion[]>([])

  const fetchSuggestions = _throttle(async ({ value: newValue }) => {
    try {
      const result = await fetch(`https://hinter.kupibilet.ru/hinter.json?limit=10&str=${newValue}`)
      const { data } = await result.json()
      const formattedSuggestions = data.map((formattedSuggestion: any) => {
        return {
          key: formattedSuggestion.city.code,
          value: formattedSuggestion.city.name.ru,
          country: formattedSuggestion.country.ru,
        }
      })
      const newSuggestions = multiSection
        ? getMultiSectionSuggestions(formattedSuggestions) : formattedSuggestions

      setSuggestions(newSuggestions)
    } catch (e) {
      console.error(e)
    }
  }, 300)

  const onChange = (
    event: React.FormEvent<HTMLElement>,
    { newValue, method }: TOnChange,
  ) => {
    if (method !== 'blur') {
      setValue(newValue)
    } else return false
  }

  const onSuggestionSelected: ReactAutosuggest.OnSuggestionSelected<TSuggestion> = (
    event,
    { suggestionValue },
  ) => {
    setValue(suggestionValue)
  }

  const clearSuggestions = () => {
    setSuggestions([])
  }

  const shouldRenderSuggestions = () => true

  return (
    <Autocomplete
      inputProps={{
        value,
        placeholder: 'Туда',
        onChange,
        type: 'text',
        autoFocus: true,
      }}
      highlightFirstSuggestion
      suggestions={suggestions}
      onSuggestionsFetchRequested={fetchSuggestions}
      onSuggestionsClearRequested={clearSuggestions}
      onSuggestionSelected={onSuggestionSelected}
      renderInputComponent={renderInputComponent}
      shouldRenderSuggestions={shouldRenderSuggestions}
      renderSuggestion={(suggestion: TSuggestion) => {
        return <Suggestion suggestion={suggestion} />
      }}
      focusInputOnSuggestionClick={false}
      renderSectionTitle={renderSectionTitle}
      multiSection={multiSection}
    />
  )
}

export const Airport = AutocompleteTemplate.bind({})

export const AirportWithMultiplySections = AutocompleteTemplate.bind({})
AirportWithMultiplySections.args = {
  multiSection: true,
  renderSectionTitle: customRenderSectionTitle,
}

export const AutocompleteWithCustomInput = AutocompleteTemplate.bind({})
AutocompleteWithCustomInput.args = {
  renderInputComponent: (props) => (
    <Input leftIcon={<Icon name="man" fill="misc500" />} {...props as TPropsInput} />
  ),
}

export default {
  component: AutocompleteTemplate,
  title: 'Autocomplete',
}
