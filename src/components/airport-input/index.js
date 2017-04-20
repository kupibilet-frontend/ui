// @flow
import React from 'react'
import ReactDOM from 'react-dom'

import { Container, Input, Spell, Geo, Code, ValuePlaceholder, GeoLabel } from './styled'

/* eslint-disable react/prop-types */
type Props = {
  value: string,
  location: string,
  spell: string,
  IATACode: string,
  onFocus: (Event) => void,
  onBlur: (Event) => void,
  neighboringInGroup: null | 'left' | 'right' | 'both',
  ref?: (?AirportInput) => void, // eslint-disable-line no-use-before-define
}
type State = {
  focused: boolean,
}

export default class AirportInput extends React.PureComponent<{}, Props, State> {
  /* eslint-disable react/sort-comp */
  static defaultProps = {
    location: '',
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

  onFocus = (e: Event & {target: HTMLInputElement}) => {
    if (this.props.onFocus) {
      this.props.onFocus(e)
    }
    this.setState({ focused: true })
    e.target.select()
  }

  onBlur = (e: Event) => {
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }
    this.setState({ focused: false })
  }

  focus = () => {
    if (this.input) {
      this.input.focus()
    }
  }

  onRef = (ref: ?AirportInput) => {
    /* eslint-disable react/no-find-dom-node */
    this.input = ref && ReactDOM.findDOMNode(ref)

    if (this.props.ref) {
      this.props.ref(ref)
    }
  }

  render() {
    const { neighboringInGroup, value, location, IATACode, ...props } = this.props
    const { focused } = this.state
    let { spell } = this.props
    if (spell.toLowerCase().indexOf(value.toLowerCase()) === 0) {
      spell = spell.substr(value.length)
    } else {
      spell = ''
    }

    return (
      <Container neighboringInGroup={neighboringInGroup} focused={focused}>
        <Input
          {...props}
          ref={this.onRef}
          value={value}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <Geo>
          <ValuePlaceholder>
            { value }
          </ValuePlaceholder>
          { value && spell && (
            <Spell className="airport-input__spell" value={spell} readOnly />
          ) }
          { location && (
          <GeoLabel>
                , { location }
          </GeoLabel>
          ) }
        </Geo>
        <Code>
          { IATACode }
        </Code>
      </Container>
    )
  }
}
