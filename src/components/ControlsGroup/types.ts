type TNeighboringInGroup = null | 'right' | 'both' | 'left'

interface TControlsGroupProps {
  neighboringInGroup?: TNeighboringInGroup,
}

export { TNeighboringInGroup, TControlsGroupProps }
