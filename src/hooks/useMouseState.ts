import { useCallback, useState } from 'react'

export type TMouseState = {
  isMouseHover: boolean,
  isMouseActive: boolean,
  onMouseEnter: () => void,
  onMouseLeave: () => void,
  onMouseDown: () => void,
  onMouseUp: () => void,
}

function useMouseState(): TMouseState {
  const [isMouseHover, setIsMouseHover] = useState(false)
  const [isMouseActive, setIsMouseActive] = useState(false)

  const onMouseEnter = useCallback(() => setIsMouseHover(true), [])
  const onMouseLeave = useCallback(() => setIsMouseHover(false), [])
  const onMouseDown = useCallback(() => setIsMouseActive(true), [])
  const onMouseUp = useCallback(() => setIsMouseActive(false), [])

  return {
    isMouseHover,
    isMouseActive,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
  }
}

export default useMouseState
