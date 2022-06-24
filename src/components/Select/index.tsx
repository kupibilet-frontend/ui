import React from 'react'
import styled from 'styled-components'
import mq from 'utils/media-queries'
import Autocomplete, {
  TProps as TAutocompleteProps,
  TSuggestion,
  TSection,
  ReactAutosuggest,
} from 'components/Autocomplete'
import RFInput, { Input } from 'components/Input'
import Icon from 'components/Icon'
import Suggestion from 'components/Suggestion'
import { shadowElevate } from 'utils/shadows'
import { borderRadiusMedium } from 'utils/borderRadius'
import noop from 'lodash/noop'

const StyledContainer = styled.div`
  margin: 3px 0 0;
  min-width: 90px;
  width: 100%;
  padding: 3px 0;
  position: absolute;
  top: 100%;
  ${shadowElevate}
  ${borderRadiusMedium.all}
  overflow: hidden;
  z-index: 10;
  background: ${({ theme }) => theme.color.background};

  ${mq.mobile`
    top: initial;
  `}

`

const SectionHeader = styled.div`
  height: 30px;
  line-height: 30px;
  padding-left: 9px;
  color: ${({ theme }) => theme.color.misc500};
`

const StyledAutocomplete = styled(Autocomplete)`
  && {
    ${mq.mobile`
      position: relative;
    `}
  }
`

/* eslint-disable react/prop-types */
const defaultInput = (props: any) => (
  <Input
    {...props}
    rightIcon={
      <Icon
        name="angle"
        rotate={props.isOpen}
        fill="misc500"
      />
    }
  />
)

const defaultRFInput = (props: any) => (
  <RFInput
    {...props}
    rightIcon={
      <Icon
        name="angle"
        rotate={props.isOpen}
        fill="misc500"
      />
    }
  />
)

const defaultContainer = (
  {
    containerProps,
    children,
  }: ReactAutosuggest.RenderSuggestionsContainerParams,
) => (
  <StyledContainer {... containerProps}>
    {children}
  </StyledContainer>
)

const defaultSectionTitle = (section: TSection) => (
  <SectionHeader>
    {section.title}
  </SectionHeader>
)

export type TProps = TAutocompleteProps & {
  selectedSuggestion: TSuggestion,
  getSuggestionKey: (suggestion: TSuggestion) => string,
}

type State = {
  isOpen: boolean,
}

export class Select extends React.Component <TProps, State> {
  static defaultProps = {
    suggestions: [],
    selectedSuggestion: {
      key: '',
      value: '',
    },
    forceSuggestedValue: false,
    focusInputOnSuggestionClick: false,
    renderInputComponent: defaultInput,
    renderSuggestionsContainer: defaultContainer,
    renderSectionTitle: defaultSectionTitle,
    shouldRenderSuggestions: () => true,
    getSuggestionValue: (suggestion: TSuggestion) => suggestion.value,
    getSuggestionKey: (suggestion: TSuggestion) => suggestion.key,
    renderSuggestion: (suggestion: TSuggestion, props: TProps) => (
      <Suggestion suggestion={suggestion} {...props} />
    ),
    onSuggestionSelected: noop,
  }

  state = {
    isOpen: false,
  }

  onSuggestionsFetchRequested = () => {
    this.setState({ isOpen: true })
  }

  onSuggestionsClearRequested = () => {
    this.setState({ isOpen: false })
  }

  handleIconPress = (
    inputNode: React.RefObject<any>,
    event: React.FormEvent<HTMLElement>,
  ) => {
    event.preventDefault()
    event.stopPropagation()
    const { isOpen } = this.state
    if (isOpen) {
      inputNode.current.blur()
    } else {
      inputNode.current.focus()
    }
  }

  renderSuggestion = (
    suggestion: TSuggestion,
    { query, isHighlighted }: ReactAutosuggest.RenderSuggestionParams,
  ) => {
    const { renderSuggestion, ...props } = this.props
    const { selectedSuggestion, getSuggestionKey } = this.props
    const renderSuggestionParams = {
      query,
      isHighlighted,
      selectedKey: getSuggestionKey(selectedSuggestion),
      ...props,
    }

    return renderSuggestion(suggestion, renderSuggestionParams)
  }

  render() {
    const { isOpen } = this.state
    const {
      inputProps,
      suggestions,
      getSuggestionValue,
      renderInputComponent,
      renderSuggestionsContainer,
      selectedSuggestion,
    } = this.props
    return (
      // @ts-ignore Destruction `this.props` is incompatible with types of styled component.
      <StyledAutocomplete
        {...this.props}
        suggestions={isOpen ? suggestions : []}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        renderInputComponent={renderInputComponent}
        renderSuggestion={this.renderSuggestion}
        inputProps={{
          ...inputProps,
          readOnly: true,
          value: getSuggestionValue(selectedSuggestion) || '',
          isOpen,
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onChange: () => {},
          handleRightIconPress: this.handleIconPress,
        }}
      />
    )
  }
}

type RFSelectProps = TProps & {
  input: any;
  meta: { active: boolean };
  placeholder: string;
}

export default class RFSelect extends React.Component <RFSelectProps, void> {
  onSuggestionSelected = (
    e: React.FormEvent<HTMLElement>,
    { suggestion }: Record<'suggestion', TSuggestion>,
  ) => {
    const { onChange } = this.props.input
    onChange(suggestion)
  }

  // We can't send actual value or event to RF so omit it
  handleBlur = () => this.props.input.onBlur()

  render() {
    const { input, meta, placeholder } = this.props
    return (
      <Select
        {...this.props}
        onSuggestionSelected={this.onSuggestionSelected}
        selectedSuggestion={input.value}
        renderInputComponent={defaultRFInput}
        inputProps={{
          placeholder,
          meta,
          ...input,
          onBlur: this.handleBlur,
        }}
      />
    )
  }
}
