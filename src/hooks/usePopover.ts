import { BasePlacement, Placement } from '@popperjs/core'
import { useEffect, useRef, useState } from 'react'
import { usePopper } from 'react-popper'

function getSide(
  placement: Placement,
  attributes: ReturnType<typeof usePopper>['attributes'],
) {
  const realPlacement = attributes?.popper?.['data-popper-placement']
  const sides: BasePlacement[] = ['bottom', 'top', 'right', 'left']

  if (realPlacement) {
    return sides.find((side) => realPlacement.includes(side)) as BasePlacement
  }

  return sides.find((side) => placement.includes(side)) as BasePlacement
}

export interface TUsePopover {
  isOpen: boolean,
  setRef: (ref: HTMLDivElement | null) => void,
  setPopper: (ref: HTMLDivElement | null) => void,
  setArrow: (ref: HTMLDivElement | null) => void,
  styles: ReturnType<typeof usePopper>['styles'],
  attributes: ReturnType<typeof usePopper>['attributes'],
  onMouseEnter: () => void,
  onMouseLeave: () => void,
  side: BasePlacement,
}

export function usePopover(placement: Placement): TUsePopover {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const [popper, setPopper] = useState<HTMLDivElement | null>(null)
  const [arrow, setArrow] = useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(ref, popper, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 14],
        },
      },
      {
        name: 'arrow',
        options: {
          element: arrow,
          padding: 3,
        },
      },
    ],
    placement,
  })
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    }
  }, [])

  function onMouseLeave() {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)

    hoverTimeout.current = null
    setIsOpen(false)
  }

  function onMouseEnter() {
    hoverTimeout.current = setTimeout(() => {
      setIsOpen(Boolean(hoverTimeout.current))
    }, 150)
  }

  const side = getSide(placement, attributes)

  return {
    isOpen,
    setRef,
    setPopper,
    setArrow,
    styles,
    attributes,
    onMouseEnter,
    onMouseLeave,
    side,
  }
}
