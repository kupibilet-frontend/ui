import React, { PropTypes } from 'react'

import { Container, Input, Spell, Geo, Code, ValuePlaceholder, GeoLabel } from './styled'

export default class AirportInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    location: PropTypes.string,
    spell: PropTypes.string,
    IATACode: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    neighboringInGroup: PropTypes.oneOf(['left', 'right', 'both']),
  }

  static defaultProps = {
    location: '',
    spell: '',
    IATACode: '',
    onFocus: null,
    onBlur: null,
    neighboringInGroup: null,
  }

  state = {
    focused: false,
  }

  onFocus = (e) => {
    if (this.props.onFocus) {
      this.props.onFocus(e)
    }
    this.setState({ focused: true })
    e.target.select()
  }

  onBlur = (e) => {
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }
    this.setState({ focused: false })
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
        <Input {...props} value={value} onFocus={this.onFocus} onBlur={this.onBlur} />
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
