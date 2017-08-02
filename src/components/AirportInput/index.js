// @flow
import React from 'react'
import ReactDOM from 'react-dom'

import { Container, Input, Spell, Geo, Code, ValuePlaceholder, GeoLabel } from './styled'

/* eslint-disable react/prop-types */
/* global SyntheticInputEvent, SyntheticKeyboardEvent */
type Props = {
  value: string,
  area: string,
  spell: string,
  IATACode: string,
  onFocus?: (SyntheticInputEvent) => void,
  onBlur?: (SyntheticInputEvent) => void,
  onKeyDown?: (SyntheticKeyboardEvent) => void,
  neighboringInGroup: null | 'left' | 'right' | 'both',
  meta?: {
    error?: string,
    touched: boolean,
  }
}
type State = {
  focused: boolean,
}

export default class AirportInput extends React.PureComponent<{}, Props, State> {
  /* eslint-disable react/sort-comp */
  static defaultProps = {
    area: '',
    spell: '',
    IATACode: '',
    onFocus: null,
    onBlur: null,
    neighboringInGroup: null,
  }

  input: Input = null
  state = {
    focused: false,
  }
  /* eslint-enable react/sort-comp */

  onFocus = (e: SyntheticInputEvent) => {
    if (this.props.onFocus) {
      this.props.onFocus(e)
    }
    this.setState({ focused: true })
    e.persist()
    setTimeout(() => {
      e.target.select()
    })
  }

  onBlur = (e: SyntheticInputEvent) => {
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }
    this.setState({ focused: false })
  }

  onKeyDown = (e: SyntheticKeyboardEvent) => {
    const { onKeyDown } = this.props

    if (e.key === 'Enter') {
      e.preventDefault()
    }

    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  focus = () => {
    if (this.input) {
      this.input.focus()
    }
  }

  onRef = (ref: ?AirportInput) => {
    /* eslint-disable react/no-find-dom-node */
    this.input = ref && ReactDOM.findDOMNode(ref)
  }

  render() {
    const { neighboringInGroup, value, area, IATACode, meta = {}, ...props } = this.props
    const hasError = meta && meta.error
    const { touched } = meta
    const { focused } = this.state
    let { spell } = this.props
    if (spell.toLowerCase().indexOf(value.toLowerCase()) === 0) {
      spell = spell.substr(value.length)
    } else {
      spell = ''
    }

    return (
      <Container
        neighboringInGroup={neighboringInGroup}
        focused={focused}
        hasError={touched && hasError}
      >
        <Input
          {...props}
          ref={this.onRef}
          value={value}
          neighboringInGroup={neighboringInGroup}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyDown}
          autoCapitalize="sentences"
          autoComplete="off"
          rows="1"
          wrap="off"
          spellcheck="false"
        />
        <Geo className="AirportInput__geo" neighboringInGroup={neighboringInGroup}>
          <ValuePlaceholder>
            { value }
          </ValuePlaceholder>
          { value && spell &&
            <Spell className="AirportInput__spell">
              { spell }
            </Spell>
          }
          { area &&
            <GeoLabel>
              {`, ${area}`}
            </GeoLabel>
          }
        </Geo>
        <Code neighboringInGroup={neighboringInGroup}>
          { IATACode }
        </Code>
      </Container>
    )
  }
}
