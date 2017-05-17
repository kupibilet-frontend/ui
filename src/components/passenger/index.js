// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import Icon from '../icons'
import Button from '../button/index'

const Passenger = styled.div`
  display: flex;
  width: 100%;
  min-width: 216px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`

const Title = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.textDarker};
`

const Description = styled.p`
  margin: 0;
  font-size: 11px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.text};
`

const Current = styled.span`
  margin-right: 6px;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.textDarker};
`

const ButtonControl = styled(Button)`
  margin-left: 6px;
`

const PassangerCount = styled.div`
  display: flex;
`

const CountControls = styled.div`
  display: inline-flex;
  align-items: center;
`
type Value = {
  counter: number,
  isMax: bool,
  isMin: bool,
}

type Props = {
  input: {
    value: Value,
    onChange: Value => void,
  },
  title: string,
  description: string,
}
type State = {}

/* eslint-disable react/prop-types */
class PassengerPicker extends Component<{}, Props, State> {
  /* eslint-disable react/sort-comp */
  state = {}

  static defaultProps = {
    title: '',
    description: '',
    input: {
      value: {
        counter: 0,
        isMax: false,
        isMin: true,
      },
      onChange: null,
    },
  }
  /* eslint-enable react/sort-comp */

  onChange = (counter: number) => {
    this.props.input.onChange({
      ...this.props.input.value,
      counter,
    })
  }

  decrement = () => {
    const { isMin, counter } = this.props.input.value

    if (!isMin) {
      this.onChange(counter - 1)
    }
  }

  increment = () => {
    const { isMax, counter } = this.props.input.value

    if (!isMax) {
      this.onChange(counter + 1)
    }
  }

  render() {
    const { title, description, input: { value }, ...props } = this.props
    const { counter, isMax, isMin } = value

    return (
      <Passenger {...props}>
        <div>
          <Title>
            {title}
          </Title>
          <Description>
            {description}
          </Description>
        </div>
        <PassangerCount>
          <Current>
            {counter}
          </Current>
          <CountControls>
            <ButtonControl
              size="normal"
              disabled={isMin}
              onClick={this.decrement}
              icon={
                <Icon
                  name="minus"
                  stroke="background"
                />
              }
            />

            <ButtonControl
              size="normal"
              disabled={isMax}
              onClick={this.increment}
              icon={
                <Icon
                  name="plus"
                  stroke="background"
                />
              }
            />
          </CountControls>
        </PassangerCount>
      </Passenger>
    )
  }
}

export default PassengerPicker
