// @flow
import React from 'react'
import type { Node } from 'react'
import { Error } from 'components/Input'
import { TogglerWrapper, ItemsWrapper } from './styled'

type Props = {
  children: Node,
  onChange: (string) => void,
  currentValue: string,
  errorMessage?: string,
}

const DEFAULT_CONTEXT = {
  onChange: () => null,
  currentValue: '',
  errorMessage: '',
}

export const TogglerContext = React.createContext(DEFAULT_CONTEXT)

const TogglerGroup = ({
  children,
  onChange,
  currentValue,
  errorMessage,
}: Props) => {
  return (
    <TogglerContext.Provider
      value={{
        onChange,
        currentValue,
        errorMessage,
      }}
    >
      <TogglerWrapper>
        <ItemsWrapper hasError={Boolean(errorMessage)}>
          {children}
        </ItemsWrapper>
        {errorMessage && (
          <Error>
            {errorMessage}
          </Error>
        )}
      </TogglerWrapper>

    </TogglerContext.Provider>
  )
}

TogglerGroup.defaultProps = {
  errorMessage: '',
}

export default TogglerGroup
