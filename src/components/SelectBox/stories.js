import React, { Component } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import updateKnob from 'utils/updateKnob'

import SelectBox from 'components/SelectBox'

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
    value: 1,
    label: 'Самые дешевые',
  },
  {
    value: 2,
    label: 'Билеты',
  },
  {
    value: 3,
    label: 'Для ваших путешествий',
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
  value: ''
}

const initialState =  {
  suggestions: defaultSuggestions,
  value: '',
}

const sizesSelect = (defaultValue = 'normal') => select(
  'size',
  {
    large: 'Large',
    normal: 'Normal',
    small: 'Small',
  },
  defaultValue,
)

const onSuggestionSelected = (event,
  { suggestion, suggestionValue, suggestionIndex, sectionIndex, method },
) => { alert(JSON.stringify(suggestion), 'is selected')}

const renderSectionTitle = (section) => (
  <SectionHeader>
    {section.title}
  </SectionHeader>
)

class SelectBoxStateful extends Component {
  constructor(props) {
    super(props)
    this.state = props.state
  }

  onChange = (returnedValue) => {
    this.setState({
      value: returnedValue
    })
  }

  render() {
    const { inputProps, ...props } = this.props
    return (
      <SelectBox
        {...props}
        suggestions={this.state.suggestions}
        inputProps={{
          ...inputProps,
          value: this.state.value,
          onChange: this.onChange,
        }}
      />
    )
  }
}

storiesOf('Controls/SelectBox', module)
  .addWithInfo('default', () => {
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', null)
    const defaultInputProps = { placeholder, disabled }
    return (
      <SelectBoxStateful
        state={initialState}
        inputProps={{
          ...defaultInputProps
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
      <SelectBoxStateful
        state={initialState}
        inputProps={{
          ...defaultInputProps
        }}
        onSuggestionSelected={onSuggestionSelected}
        error={error}
        success={success}
      />
    )
  }
  )
  .addWithInfo('With custom sections', () => {
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', null)
    const defaultInputProps = { placeholder, disabled }
    return (
      <SelectBoxStateful
        state={initialStateSections}
        inputProps={{
          ...defaultInputProps
        }}
        multiSection
        renderSectionTitle={renderSectionTitle}
        error={error}
        success={success}
      />
    )
  }
  )
