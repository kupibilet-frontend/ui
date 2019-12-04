import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import H2 from '../Typography/H2'
import {
  AIRLINE_COLORS,
  DEFAULT_AIRLINE_COLOR,
  DEFAULT_OPERATING_AIRLINE_COLOR,
} from './index'
import { AIRLINE_CODE_TO_NAME_MAP } from './airlineCodeToName'

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 24px auto;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 12px;
  
  margin: 18px 0;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`

const ColorCard = styled.div`
  border: 1px solid ${({ theme }) => theme.color.miscLighter};
  border-radius: 5px;
`

const ColorBox = styled.div`
  height: 90px;
  border-radius: 5px 5px 0 0;

  margin-bottom: 6px;
  background-color: ${({ color }) => color};  
`

const DefaultAirlineText = styled.div`
  padding: 6px;
  color: ${({ theme }) => theme.color.text};
`

const AirlineInfo = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 3fr;
  
  padding: 6px;
`

const AirlineInfoKey = styled.span`
  color: ${({ theme }) => theme.color.textDark};
`

const AirlineInfoValue = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.color.textDarker};
`

storiesOf('COLORS', module)
  .add('Airline colors', () => (
    <Wrapper>
      <H2>Default colors</H2>
      <CardsContainer>
        <ColorCard>
          <ColorBox color={DEFAULT_AIRLINE_COLOR} />
          <DefaultAirlineText>
            Airline color
          </DefaultAirlineText>
          <AirlineInfo>
            <AirlineInfoKey>Color</AirlineInfoKey>
            <AirlineInfoValue>{DEFAULT_AIRLINE_COLOR}</AirlineInfoValue>
          </AirlineInfo>
        </ColorCard>
        <ColorCard>
          <ColorBox color={DEFAULT_OPERATING_AIRLINE_COLOR} />
          <DefaultAirlineText>
            Operating airline color
          </DefaultAirlineText>
          <AirlineInfo>
            <AirlineInfoKey>Color</AirlineInfoKey>
            <AirlineInfoValue>{DEFAULT_OPERATING_AIRLINE_COLOR}</AirlineInfoValue>
          </AirlineInfo>
        </ColorCard>
      </CardsContainer>
      <H2>Airline colors</H2>
      <CardsContainer>
        {Object.entries(AIRLINE_COLORS).map(([airlineCode, airlineColor]) => (
          <ColorCard key={airlineCode}>
            <ColorBox color={airlineColor} />
            <AirlineInfo>
              <AirlineInfoKey>Code</AirlineInfoKey>
              <AirlineInfoValue>{airlineCode}</AirlineInfoValue>

              <AirlineInfoKey>Color</AirlineInfoKey>
              <AirlineInfoValue>{airlineColor}</AirlineInfoValue>

              <AirlineInfoKey>Name</AirlineInfoKey>
              <AirlineInfoValue>{AIRLINE_CODE_TO_NAME_MAP[airlineCode] || '🤷🏻‍♀️'}</AirlineInfoValue>
            </AirlineInfo>
          </ColorCard>
        ))}
      </CardsContainer>
    </Wrapper>
  ))
