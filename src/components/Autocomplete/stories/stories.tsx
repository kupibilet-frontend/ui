import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Input, TProps as TPropsInput } from 'components/Input'
import Icon from 'components/Icon'
import { TSection } from 'components/Autocomplete'
import { COLOR_NAMES } from 'components/ThemeProvider/types'
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

const renderSectionTitle = (section: TSection) => (
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
            (props) => (<Input leftIcon={<Icon name="man" fill={COLOR_NAMES.miscDark} />} {...props as TPropsInput} />)
          }
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
