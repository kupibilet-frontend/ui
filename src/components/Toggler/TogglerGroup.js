// @flow
import React from 'react'
import type { Node } from 'react'
import styled from 'styled-components'

const TogglerWrapper = styled.div`
  display: flex;
`

type Props = {
  children: Node,
  onChange: () => void,
  currentValue: string,
}

export const TogglerContext = React.createContext()

const TogglerGroup = ({
  children,
  onChange,
  currentValue = '',
}: Props) => {
  return (
    <TogglerContext.Provider
      value={{
        onChange,
        currentValue,
      }}
    >
      <TogglerWrapper>
        {children}
      </TogglerWrapper>
    </TogglerContext.Provider>
  )
}

export default TogglerGroup
