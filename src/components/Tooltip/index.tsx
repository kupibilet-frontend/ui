import React, { ReactElement, RefObject, useRef, useState, useEffect } from 'react'
import { Portal } from 'react-portal'
import { GlobalStylesScope } from 'components/ThemeProvider'
import TextSmall from 'components/Typography/TextSmall'
import { TCoordinates, TPlacement } from './types'
import {
  TooltipBackground,
  TooltipContainer,
  RelativeWrapper,
  TooltipDot,
  PositionWrapper,
  PlacementWrapper,
} from './styled'

interface TPortalProps {
  isOpen: boolean,
  coords: TCoordinates | undefined,
  placement: TPlacement,
  content: any,
  success?: boolean,
  error?: boolean,
}

const TooltipPortal = ({
  isOpen,
  coords,
  placement,
  content,
  success = false,
  error = false,
}: TPortalProps): JSX.Element | null => {
  if (!content || !isOpen || !coords) return null

  return (
    <Portal>
      <GlobalStylesScope>
        <TooltipContainer
          top={coords.top}
          left={coords.left}
          width={coords.width}
          height={coords.height}
          placement={placement}
        >
          <PositionWrapper>
            <PlacementWrapper placement={placement}>
              <RelativeWrapper
                placement={placement}
                width={coords.width}
                height={coords.height}
              >
                <TooltipDot
                  success={success}
                  error={error}
                />
                <TooltipBackground
                  success={success}
                  error={error}
                >
                  <TextSmall>
                    { content }
                  </TextSmall>
                </TooltipBackground>
              </RelativeWrapper>
            </PlacementWrapper>
          </PositionWrapper>
        </TooltipContainer>
      </GlobalStylesScope>
    </Portal>
  )
}

type TProps = {
  /**
  * Вложенный в тултип элемент
  */
  children: ReactElement,
  /**
  * То, что будет отображаться в тултипе
  */
  content: any,
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
  * Тултип цвета ошибки
  */
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
}: TProps): JSX.Element => {
  const childRef = useRef<HTMLDivElement>(null)
  const [isOpen, setOpenStatus] = useState<boolean>(false)
  const [coords, setCoords] = useState<TCoordinates | undefined>(undefined)

  let hoverTimeout: ReturnType<typeof setTimeout>

  useEffect(() => {
    setCoords(getCoordinates(childRef))
    return () => {
      clearTimeout(hoverTimeout)
    }
  }, [])

  const handleMouseLeave = (): void => {
    clearTimeout(hoverTimeout)
    setOpenStatus(false)
  }

  const handleMouseEnter = (): void => {
    hoverTimeout = setTimeout(() => {
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
        style={{ display: 'inline-block' }}
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
