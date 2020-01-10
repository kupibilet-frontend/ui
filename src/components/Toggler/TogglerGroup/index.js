// @flow
import React, { useState } from 'react'
import type { Node } from 'react'
import { TogglerWrapper, ItemsWrapper, StyledError } from './styled'

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
  * Функция, срабатывающая при смене фокуса на элементах.
    Используется для правильного срабатывания ReduxForm touched props и корректной валидации
  */
  onBlur: (Event) => void,
   /**
  * Текущее значение компонента
  */
  currentValue: string,
   /**
  * Сообщение об ошибке, если она есть
  */
  errorMessage?: string,
   /**
  * Имя контрола
  */
  name: string,
}

const DEFAULT_PROPS = {
  name: '',
  errorMessage: '',
  onChange: () => null,
  onBlur: () => null,
  currentValue: '',
}

const DEFAULT_CONTEXT = {
  ...DEFAULT_PROPS,
  setFocus: () => null,
  isFocused: false,
}

export const TogglerContext = React.createContext(DEFAULT_CONTEXT)

/**
 * Компонент для выбора опции, например, пола
 */

const TogglerGroup = ({
  children,
  onChange,
  onBlur,
  currentValue,
  errorMessage,
  name,
  ...props
}: Props) => {
  const [isFocused, setFocus] = useState(false)
  return (
    <TogglerContext.Provider
      value={{
        onChange,
        currentValue,
        name,
        setFocus,
        isFocused,
        onBlur,
      }}
    >
      <TogglerWrapper {...props}>
        <ItemsWrapper hasError={Boolean(errorMessage)} isFocused={isFocused}>
          {children}
        </ItemsWrapper>
        {errorMessage && !isFocused && (
          <StyledError>
            {errorMessage}
          </StyledError>
        )}
      </TogglerWrapper>

    </TogglerContext.Provider>
  )
}

TogglerGroup.defaultProps = DEFAULT_PROPS

export default TogglerGroup
