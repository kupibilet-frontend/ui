// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import Button from 'components/Button'
import createTestId from '../../utils/createTestId'

const Passenger = styled.div`
  display: flex;
  width: 100%;
  min-width: 216px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`

const Title = styled.div`
  margin: 0;
  font-size: 16px;
  line-height: 16px;
  padding-bottom: 2px;
  color: ${({ theme }) => theme.color.textDarker};
`

const Description = styled.div`
  margin: 0;
  font-size: 11px;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: .6px;
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
  namespace: string,
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

  decrement = (event: Event) => {
    const { isMin, counter } = this.props.input.value
    event.preventDefault()

    if (!isMin) {
      this.onChange(counter - 1)
    }
  }

  increment = (event: Event) => {
    const { isMax, counter } = this.props.input.value
    event.preventDefault()

    if (!isMax) {
      this.onChange(counter + 1)
    }
  }

  render() {
    const { title, description, namespace, input: { value }, ...props } = this.props
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
        <PassangerCount {...createTestId(`${namespace}.counter`, { value: counter })}>
          <Current>
            {counter}
          </Current>
          <CountControls>
            <ButtonControl
              size="normal"
              {...createTestId(`${namespace}.button.minus`, { action: 'minus' })}
              disabled={isMin}
              onClick={this.decrement}
              icon={
                <Icon
                  name="minus"
                  fill="background"
                />
              }
            />

            <ButtonControl
              size="normal"
              {...createTestId(`${namespace}.button.plus`, { action: 'plus' })}
              disabled={isMax}
              onClick={this.increment}
              icon={
                <Icon
                  name="plus"
                  fill="background"
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
