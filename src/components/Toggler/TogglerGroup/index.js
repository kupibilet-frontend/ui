// @flow
import React from 'react'
import type { Node } from 'react'
import { TogglerWrapper } from './styled'

type Props = {
  children: Node,
  onChange: () => void,
  currentValue: string,
}

const DEFAULT_CONTEXT = {
  onChange: () => null,
  currentValue: '',
}

export const TogglerContext = React.createContext(DEFAULT_CONTEXT)

const TogglerGroup = ({
  children,
  onChange,
  currentValue,
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
