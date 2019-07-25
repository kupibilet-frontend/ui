import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Input } from 'components/Input'
import Icon from 'components/Icon'
import AutocompleteStateful from './AutocompleteStateful'
import AutocompleteMultiSelect from './AutocompleteMultiSelect'

const cities = ['Санкт-Петербург', 'Москва', 'Казань', 'Ашхабад', 'Мадрид', 'Самара']

const SectionHeader = styled.div`
  height: 30px;
  line-height: 30px;
  padding-left: 9px;
  color: ${({ theme }) => theme.color.miscDark};
`

const Container = styled.div`
  width: 244px;
`

const renderSectionTitle = (section) => (
  <SectionHeader>
    {section.title}
  </SectionHeader>
)

storiesOf('COMPONENTS|Controls/Autocomplete', module)
  .add(
    'Airport',
    () => (
      <Container>
        <AutocompleteStateful />
      </Container>
    ),
    {
      notes: `
        Uses <AirportInput /> and <AirportSuggest />.
        Can be used inside <ControlsGroup />
      `,
    },
  )
  .add(
    'Airport with multiply sections',
    () => (
      <Container>
        <AutocompleteStateful
          multiSection
          renderSectionTitle={renderSectionTitle}
        />
      </Container>
    ),
  )
  .add(
    'Autocomplete with custom input',
    () => (
      <Container>
        <AutocompleteStateful
          renderInputComponent={
            (props) => (<Input
              leftIcon={<Icon name="man" fill="miscDark" />}
              {...props}
            />)}
        />
      </Container>
    ),
  )
  .add(
    'Autocomplete with multiply select',
    () => {
      return (
        <Container>
          <AutocompleteMultiSelect
            citiesList={cities}
          />
        </Container>
      )
    },
  )
