import React from 'react'

// General types
type TPopoverSize = 'normal' | 'large'

type TPopoverPlacement = 'top' | 'bottom' | 'left' | 'right'

interface TCoordinates {
  left: number,
  top: number,
  width: number,
  height: number,
}

type TTopLeftCoordinates = Pick<TCoordinates, 'top' | 'left'>


// Component's props
type TPopoverProps = {
  children: React.ReactNode,
  content: React.ReactNode,
  header?: string,
  placement?: TPopoverPlacement,
  size?: TPopoverSize,
}

interface TPopoverContentProps {
  isOpen: boolean,
  coordinates?: TCoordinates | null,
  placement: TPopoverPlacement,
  content: React.ReactNode,
  header?: string,
  size: TPopoverSize,
}


// Styled's props
type TPopoverContainerProps = Required<Pick<TPopoverContentProps, 'placement'>> & { coordinates: TCoordinates }

type TPlacementWrapperProps = Pick<TPopoverContentProps, 'placement'>

type TRelativeWrapperProps = Pick<TPopoverContentProps, 'placement'>

type TPopoverDotProps = Pick<TPopoverContentProps, 'placement'>

type TPopoverBackgroundProps = Pick<TPopoverContentProps, 'size'>


export {
  TPopoverSize,
  TPopoverPlacement,
  TCoordinates,
  TTopLeftCoordinates,

  TPopoverProps,
  TPopoverContentProps,

  TPopoverContainerProps,
  TPlacementWrapperProps,
  TRelativeWrapperProps,
  TPopoverDotProps,
  TPopoverBackgroundProps,
}
