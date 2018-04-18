import styled, { css } from 'styled-components'

import { shadowSmall } from 'utils/shadows'
import { borderRadiusSmall } from 'utils/borderRadius'
import mq from 'utils/media-queries'

export default css`
  position: relative;

  ${mq.mobile`
    position: static;
  `} .react-autosuggest__container {
  }
  .react-autosuggest__container--open {
  }
  .react-autosuggest__input {
    appearance: none;

    &::-ms-clear,
    &::-webkit-search-cancel-button {
      display: none;
    }
  }
  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .react-autosuggest__input--focused {
    outline: none;
  }
  .react-autosuggest__suggestions-container {
    display: none;
  }
  .react-autosuggest__suggestions-container--open {
    display: block;
  }
  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .react-autosuggest__suggestion {
    cursor: pointer;
  }
  .react-autosuggest__suggestion--first {
  }
  .react-autosuggest__suggestion--highlighted {
  }
  .react-autosuggest__section-container {
  }
  .react-autosuggest__section-container--first {
  }
  .react-autosuggest__section-title {
  }
`

export const SuggestionsContainer = styled.div`
  margin: 3px 0 0;
  padding: 3px 0;
  position: absolute;
  top: 100%;
  width: 300px;
  ${shadowSmall} ${borderRadiusSmall.all} overflow: hidden;
  z-index: 10;
  background: ${({ theme }) => theme.color.background};

  ${mq.mobile`
    padding: 0;
    top: initial;
    margin: 12px auto 0;
    box-shadow: none;
    width: 100%;
  `};
`
