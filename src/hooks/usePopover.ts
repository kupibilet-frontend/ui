/* eslint-disable no-param-reassign */
import { BasePlacement, Modifier, Placement } from '@popperjs/core'
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

const applyPopperShift: Modifier<'applyPopperShift', Record<string, never>> = {
  name: 'applyPopperShift',
  enabled: true,
  phase: 'main',
  fn({ state, name }) {
    const { placement } = state
    let offset = { x: 0, y: 0 }

    if (state.modifiersData.arrow?.centerOffset !== 0) {
      if (/start/.test(placement)) {
        offset = { x: -16, y: 0 }
      } else if (/end/.test(placement)) {
        offset = { x: 16, y: 0 }
      }
    }

    state.modifiersData[name] = offset
    const { x, y } = offset

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x
      state.modifiersData.popperOffsets.y += y
    }
  },
}

export interface TUsePopover {
  isOpen: boolean,
  setRef: (ref: Element | null) => void,
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
  const [ref, setRef] = useState<Element | null>(null)
  const [popper, setPopper] = useState<HTMLDivElement | null>(null)
  const [arrow, setArrow] = useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(ref, popper, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 12],
        },
      },
      {
        name: 'arrow',
        options: {
          element: arrow,
          padding: 16,
        },
      },
      applyPopperShift,
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

  const setRefFirstChild = (node: Element | null) => {
    if (node?.firstElementChild) {
      setRef(node?.firstElementChild)
    } else {
      setRef(node)
    }
  }

  return {
    isOpen,
    setRef: setRefFirstChild,
    setPopper,
    setArrow,
    styles,
    attributes,
    onMouseEnter,
    onMouseLeave,
    side,
  }
}
