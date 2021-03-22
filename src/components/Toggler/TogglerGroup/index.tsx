import React, { ReactElement } from 'react'
import { TogglerWrapper, ItemsWrapper, StyledError } from './styled'

type TProps = {
  /**
  * Для указания доступных опций используется компонент <TogglerItem />
  */
  children: ReactElement[],
  /**
  * Функция, срабатывающая при выборе опции. Принимает значение опции
  */
  onChange?: (value: string) => void,
  /**
  * Функция, срабатывающая при смене фокуса на элементах.
    Используется для правильного срабатывания ReduxForm touched props и корректной валидации
  */
  onBlur?: (event: Event) => void,
   /**
  * Текущее значение компонента
  */
  currentValue: string | number,
   /**
  * Сообщение об ошибке, если она есть
  */
  errorMessage?: string,
   /**
  * Имя контрола
  */
  name?: string,
}

/**
 * Компонент для выбора опции, например, пола
 */

const TogglerGroup = ({
  children,
  onChange = () => null,
  onBlur = () => null,
  currentValue = '',
  errorMessage = '',
  name = '',
  ...props
}: TProps): JSX.Element => {
  const [isFocused, setFocus] = React.useState(false)

  return (
    <TogglerWrapper {...props}>
      <ItemsWrapper hasError={Boolean(errorMessage)}>
        {React.Children.map(children, (element: ReactElement) => (
          React.cloneElement(element, {
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

export default TogglerGroup
