import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icons'
import styled from 'styled-components'
import { button } from '../../utils/reset'
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

class PassangerPicker extends React.PureComponent {
  decrement = () => {
    if(!this.props.isMin) {
      this.props.onChange(this.props.value - 1)
    }
  }

  increment = () => {
    if(!this.props.isMax) {
      this.props.onChange(this.props.value + 1)
    }
  }

  render() {
    const { title, description, value, onChange, isMin, isMax } = this.props
  
    return (
      <Passenger>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <PassangerCount>
          <Current>{value}</Current>
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
            } />
            <ButtonControl
              size="normal"
              disabled={isMax}
              onClick={this.increment}
              icon={
                <Icon 
                  name="plus"
                  stroke="background"
                />
            } />
          </CountControls>
        </PassangerCount>
      </Passenger>
    )
  }
}

PassangerPicker.defaultProps = {
  title: '',
  description: '',
  current: 0,
  disabled: '',
  decrement: null,
  increment: null,
  isMax: false,
  isMin: true,
}

PassangerPicker.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  current: PropTypes.number,
  disabled: PropTypes.string,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  isMin: PropTypes.bool,
  isMax: PropTypes.bool,
}

export default PassangerPicker
