import React, { useEffect, useRef, useState } from 'react'
import { TCoordinates, TPopoverProps } from './types'
import PopoverContent from './PopoverContent'


function Popover(props: TPopoverProps): JSX.Element {
  const {
    children,
    content,
    header,
    placement = 'bottom',
    size = 'normal',
  } = props

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const childRef = useRef<HTMLDivElement | null>(null)
  const [coordinates, setCoordinates] = useState<TCoordinates | null>(null)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  function getCoordinates() {
    if (childRef.current) {
      const rect = childRef.current.getBoundingClientRect()

      return {
        width: rect.width as number,
        height: rect.height as number,
        left: (rect.left + window.pageXOffset) as number,
        top: (rect.top + window.pageYOffset) as number,
      }
    }
  }

  useEffect(() => {
    if (childRef.current) {
      setCoordinates(getCoordinates() as TCoordinates)
    }

    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    }
  }, [])

  function handleMouseLeave() {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)

    hoverTimeout.current = null
    setIsOpen(false)
  }

  function handleMouseEnter() {
    hoverTimeout.current = setTimeout(() => {
      setCoordinates(getCoordinates() as TCoordinates)
      setIsOpen(Boolean(hoverTimeout.current))
    }, 150)
  }

  return (
    <>
      <div
        key="PopoverpedElement"
        ref={childRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      <PopoverContent
        key="PopoverContent"
        coordinates={coordinates}
        placement={placement}
        isOpen={isOpen}
        content={content}
        header={header}
        size={size}
      />
    </>
  )
}


export default Popover
