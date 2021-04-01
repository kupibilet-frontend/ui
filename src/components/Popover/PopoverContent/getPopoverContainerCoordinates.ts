import { TTopLeftCoordinates, TPopoverContainerProps } from 'components/Popover/types'


function getPopoverContainerCoordinates(props: TPopoverContainerProps): TTopLeftCoordinates {
  const { placement, coordinates: { top, left, width, height } } = props

  if (placement === 'right') return { top, left: left + width }
  if (placement === 'bottom') return { top: top + height, left }
  if (placement === 'top') return { top, left }

  return { top, left }
}

export default getPopoverContainerCoordinates
