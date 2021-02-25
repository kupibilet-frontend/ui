import React, { ReactElement } from 'react'
import { TogglerWrapper, ItemsWrapper, StyledError } from './styled'

export type TVariant = 'primary' | 'secondary'

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
  /**
   * Вариант контрола для стилизации
   */
  variant?: TVariant,
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
  variant = 'primary',
  ...props
}: TProps) => {
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
            variant,
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

// TogglerGroup.defaultProps = DEFAULT_PROPS

export default TogglerGroup
