import React, { ReactElement, RefObject, useRef, useState, useEffect } from 'react'
import TooltipPortal from './TooltipPortal'
import { TCoordinates, TPlacement } from './types'

export interface TProps {
  /**
  * Вложенный в тултип элемент
  */
  children: ReactElement,
  /**
  * То, что будет отображаться в тултипе
  */
  content: React.ReactNode,
  /**
  * Положение тултипа, относительно элемента
  */
  placement: TPlacement,
  /**
  * Тултип цвета успеха
  */
  success?: boolean,
  /**
  * Тултип цвета ошибки
  */
  error?: boolean,
  /**
  * Проп для стилизации обертки контента тултипа
  */
  className?: string
}

const getCoordinates = (node: RefObject<HTMLDivElement>): TCoordinates | undefined => {
  if (node.current !== null) {
    const rect = node.current.getBoundingClientRect()
    return {
      width: rect.width,
      height: rect.height,
      left: rect.left + window.pageXOffset,
      top: rect.top + window.pageYOffset,
    }
  }
}

/**
 * Компонент для всплывающих при наведении подсказок
 */

const Tooltip = ({
  content,
  placement = 'bottom',
  success = false,
  error = false,
  children,
  className = '',
}: TProps): JSX.Element => {
  const childRef = useRef<HTMLDivElement>(null)
  const [isOpen, setOpenStatus] = useState<boolean>(false)
  const [coords, setCoords] = useState<TCoordinates | undefined>(undefined)

  const hoverTimeout = useRef<number>()

  useEffect(() => {
    setCoords(getCoordinates(childRef))
    return () => window.clearTimeout(hoverTimeout.current)
  }, [])

  const handleMouseLeave = (): void => {
    window.clearTimeout(hoverTimeout.current)
    setOpenStatus(false)
  }

  const handleMouseEnter = (): void => {
    hoverTimeout.current = window.setTimeout(() => {
      setCoords(getCoordinates(childRef))
      setOpenStatus(Boolean(hoverTimeout))
    }, 150)
  }

  return (
    <>
      <div
        ref={childRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key="tooltippedElement"
        className={className}
      >
        {children}
      </div>
      <TooltipPortal
        key="tooltipPortal"
        coords={coords}
        placement={placement}
        isOpen={isOpen}
        content={content}
        success={success}
        error={error}
      />
    </>
  )
}

export default Tooltip
