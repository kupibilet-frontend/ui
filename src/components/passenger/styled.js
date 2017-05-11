import styled from 'styled-components'
import { button } from '../../utils/reset'

export const Passenger = styled.div`
  display: flex;
  width: 100%;
  min-width: 216px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`

export const Title = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.textDarker};
`

export const Description = styled.p`
  margin: 0;
  font-size: 11px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.text};
`

export const Current = styled.span`
  margin-right: 6px;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.textDarker};
`

export const CountControl = styled.button`
  ${ button };
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-left: 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary};

  &.control-max {
    opacity: ${(props) => (props.isMax === true ? 0.2 : 1)};
    cursor: ${(props) => (props.isMax === true ? 'default' : 'pointer')};
  }

  &.control-min {
    opacity: ${(props) => (props.isMin === true ? 0.2 : 1)};
    cursor: ${(props) => (props.isMin === true ? 'default' : 'pointer')};
  }
`

export const PassangerCount = styled.div`
  display: flex;
`

export const CountControls = styled.div`
  display: inline-flex;
  align-items: center;
`