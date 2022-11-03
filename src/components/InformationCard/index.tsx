import React from 'react'
import { useWithMedia2021 } from 'hooks/useWithMedia'
import {
  ActionInner,
  Container,
  FlexGrow,
  InformationCardTextInner,
  InformationCardTitleInner,
  InnerContainer,
  StyledIcon,
} from './styled'
import {
  TInformationCardProps,
  TInformationCardTextProps,
  TInformationCardTitleProps,
} from './types'

export const InformationCard = ({
  children,
  severity,
  icon,
  action,
  layoutTheme = 'default',
  className,
}: TInformationCardProps): JSX.Element => {
  const { isMobile } = useWithMedia2021()
  const iconName = icon ?? 'exclamation-circle-filled'

  const actionComponent = action ? (
    <ActionInner layoutTheme={layoutTheme} severity={severity}>
      {action}
    </ActionInner>
  ) : (
    <></>
  )

  return (
    <Container
      layoutTheme={layoutTheme}
      severity={severity}
      className={className}
    >
      <StyledIcon
        name={iconName}
        layoutTheme={layoutTheme}
        severity={severity}
      />
      <InnerContainer>
        <FlexGrow>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              severity,
              layoutTheme,
              isMobile,
            })
          })}
        </FlexGrow>
        {layoutTheme === 'button_default' && actionComponent}
      </InnerContainer>
      {layoutTheme === 'button_icon' ? actionComponent : <></>}
    </Container>
  )
}

export const InformationCardTitle = ({
  children,
  layoutTheme = 'default',
  severity = 'info',
  isMobile = false,
}: TInformationCardTitleProps): JSX.Element => {
  return (
    <InformationCardTitleInner
      variant="small"
      isBold
      layoutTheme={layoutTheme}
      severity={severity}
      isMobile={isMobile}
    >
      {children}
    </InformationCardTitleInner>
  )
}

export const InformationCardText = ({
  children,
  layoutTheme = 'default',
  severity = 'info',
  isMobile = false,
} : TInformationCardTextProps): JSX.Element => {
  return (
    <InformationCardTextInner
      variant="caption"
      layoutTheme={layoutTheme}
      severity={severity}
      isMobile={isMobile}
    >
      {children}
    </InformationCardTextInner>
  )
}
