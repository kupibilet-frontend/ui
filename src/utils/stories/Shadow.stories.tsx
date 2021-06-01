import React from 'react'
import * as shadowsImport from 'utils/shadows'
import styled from 'styled-components'
import H3 from 'components/Typography/H3'

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
