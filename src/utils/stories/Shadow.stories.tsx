import React from 'react'
import * as shadowsImport from 'utils/shadows'
import styled, { css } from 'styled-components'

const shadows: { [key: string]: string } = { ...shadowsImport }

interface TProps {
  shadow: string,
}

const Container = styled.div`
  display: flex;
`

const Shadow = styled.div<TProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 168px;
  width: 196px;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 32px;
  ${({ shadow }) => shadow}

  transition: transform 150ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.05);
  }
`
const H3 = styled.h3`
  font-size: 22px;
  line-height: 32px;
  margin: 0;
  font-weight: 600;
  ${({ theme }) => css`
    @media ${theme.queries.isMobile} {
      font-size: 18px;
      line-height: 26px;
    }
  `}
`

export function Shadows(): JSX.Element {
  return (
    <Container>
      {Object.keys(shadows).map((shadow: string) => (
        <Shadow
          key={shadow}
          shadow={shadows[shadow]}
          onClick={() => navigator.clipboard.writeText(shadow)}
        >
          <H3>
            {shadow}
          </H3>
        </Shadow>
      ))}
    </Container>
  )
}

export default {
  title: 'SHADOWS',
}
