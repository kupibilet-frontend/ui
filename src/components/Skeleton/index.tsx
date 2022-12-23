import React from 'react'
import styled, { DefaultTheme, keyframes } from 'styled-components'


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
  0%{background-position: 100vw 0}
  to{background-position: 250vw 0}
`

// eslint-disable-next-line max-len
const skeletonLineColor = ({ theme }: { theme: DefaultTheme}) => theme.skeleton.skeleton_default_default_color_bg_default

const StyledSkeleton = styled.div<StylesProps>`
  position: relative;
  overflow: hidden;
  border-radius: ${({ variant }) => (variant === 'circular' ? '50%' : '4px')};
  width: ${choiceOfWidth};
  height: ${choiceOfHeight};
  background: ${({ theme }) => theme.skeleton.skeleton_default_default_color_bg_default};
  background: 
    linear-gradient(270deg, 
      ${skeletonLineColor} 0%, 
      ${skeletonLineColor} 42.4%, 
      rgba(237, 238, 243, 0) 54.38%,
      ${skeletonLineColor} 66.88%, ${skeletonLineColor} 100%),
      linear-gradient(270deg, 
        ${skeletonLineColor} 0%,
        ${skeletonLineColor} 39.27%, 
        rgba(237, 238, 243, 0) 54.9%, 
        ${skeletonLineColor} 100%);
  background-size: 150vw 104px;
  position: relative;
  animation-name: ${skeletonAnimation};
  animation-duration: 1.6s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
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
