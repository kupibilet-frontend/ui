// @flow
import React from 'react'
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
  const [isFocused, setFocus] = React.useState(false)

  return (
    <TogglerWrapper {...props}>
      <ItemsWrapper hasError={Boolean(errorMessage)} isFocused={isFocused}>
        {React.Children.map(children, (child) => (
          React.cloneElement(child, {
            onChange,
            onBlur,
            currentValue,
            errorMessage,
            name,
            setFocus,
            ...props,
          })
        ))}
      </ItemsWrapper>
      {errorMessage && !isFocused && (
        <StyledError>
          {errorMessage}
        </StyledError>
      )}
    </TogglerWrapper>
  )
}

TogglerGroup.defaultProps = DEFAULT_PROPS

export default TogglerGroup
