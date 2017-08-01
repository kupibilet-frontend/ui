import styled from 'styled-components'

import { shadowSmall } from 'utils/shadows'
import { borderSmall } from 'utils/borders'
import mq from 'utils/media-queries'

export default styled.div`
  .react-autosuggest__container {}
  .react-autosuggest__container--open {}
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
    position: relative;

    ${mq.mobile`
      position: static;
    `}
  }
  .react-autosuggest__suggestions-list {
    margin: 3px 0 0;
    padding: 0;
    list-style-type: none;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 320px;
    max-width: 540px;
    ${shadowSmall}
    ${borderSmall}
    overflow: hidden;
    z-index: 10;

    ${mq.mobile`
      top: initial;
      left: 0;
      right: 0;
    `}
  }
  .react-autosuggest__suggestion {
    cursor: pointer;
  }
  .react-autosuggest__suggestion--first {}
  .react-autosuggest__suggestion--highlighted {}
  .react-autosuggest__section-container {}
  .react-autosuggest__section-container--first {}
  .react-autosuggest__section-title {}
`
