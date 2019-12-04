// @flow
import React from 'react'
import type { Node } from 'react'
import { Error } from 'components/Input'
import { TogglerWrapper, ItemsWrapper } from './styled'

type Props = {
  /**
  * Для указания доступных опций используется компонент <TogglerItem />
  */
  children: Node,
  /**
  * Функция, срабатывающая при выборе опции. Принимает значение опции
  */
  onChange: (string) => void,
   /**
  * Текущее значение компонента
  */
  currentValue: string,
   /**
  * Сообщение об ошибке, если она есть
  */
  errorMessage?: string,
}

const DEFAULT_CONTEXT = {
  onChange: () => null,
  currentValue: '',
  errorMessage: '',
}

export const TogglerContext = React.createContext(DEFAULT_CONTEXT)

/**
 * Компонент для выбора опции, например, пола
 */

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
