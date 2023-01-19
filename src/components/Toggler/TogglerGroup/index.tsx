import React, { ReactElement } from 'react'
import { FormHelperText } from 'components/FormHelperText'
import { TogglerWrapper, ItemsWrapper } from './styled'

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

  helperText?: React.ReactNode,

  disabled?: boolean,
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
  helperText = '',
  disabled = false,
  ...props
}: TProps): JSX.Element => {
  return (
    <TogglerWrapper {...props}>
      <ItemsWrapper hasError={Boolean(errorMessage)}>
        {React.Children.toArray(children).map((element, index: number, array) => {
          let hasDelimiter = true
          if ((element as ReactElement).props?.value === currentValue) {
            hasDelimiter = false
          } else if (array[index + 1]) {
            if ((array[index + 1] as ReactElement).props?.value === currentValue) {
              hasDelimiter = false
            }
          } else {
            hasDelimiter = false
          }

          return React.cloneElement(element as ReactElement, {
            onChange,
            onBlur,
            currentValue,
            errorMessage,
            name,
            hasDelimiter,
            disabled,
            ...props,
          })
        })}
      </ItemsWrapper>
      <FormHelperText error={errorMessage} helperText={helperText} />
    </TogglerWrapper>
  )
}

export default TogglerGroup
