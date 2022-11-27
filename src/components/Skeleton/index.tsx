import React from 'react'
import styled, { keyframes } from 'styled-components'


type StylesProps = {hasChildren: boolean} & SkeletonProps

const choiceOfWidth = ({ hasChildren, width }:StylesProps) => {
  if (width) return `${width}px`

  if (hasChildren && !width) {
    return 'fit-content'
  }

  return '100%'
}

const choiceOfHeight = ({ hasChildren, height }:StylesProps) => {
  if (height) return `${height}px`

  if (hasChildren && !height) {
    return 'auto'
  }

  return '100%'
}

const skeletonAnimation = keyframes`
  0% {
    left: -100%;
  }
  50% {
    left: 50%;
  }
  100% {
    left: 200%;
  }
`


const StyledSkeleton = styled.div<StylesProps>`
  position: relative;
  overflow: hidden;
  border-radius: ${({ variant }) => (variant === 'circular' ? '50%' : '4px')};
  width: ${choiceOfWidth};
  height: ${choiceOfHeight};
  background: ${({ theme }) => theme.skeleton.skeleton_default_default_color_bg_default};
  &::after {
    content: '';
    animation: ${skeletonAnimation} 1.6s linear 1.6s infinite;
    background: ${({ theme }) => theme.skeleton.skeleton_default_default_color_primary_default};
    filter: blur(8.5px);
    position: absolute;
    transform: translateX(-100%); 
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: 15%;
}
`


type SkeletonProps = {
  width?: number;
  height?: number;
  variant?: 'circular' | 'rounded'
}

// eslint-disable-next-line react/prop-types
export const Skeleton: React.FC<SkeletonProps> = ({ width, height, children, variant = 'rounded' }) => {
  const hasChildren = Boolean(children)

  return (
    <StyledSkeleton
      width={width}
      height={height}
      hasChildren={hasChildren}
      variant={variant}
    >
      {children}
    </StyledSkeleton>
  )
}
