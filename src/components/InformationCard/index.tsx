import React from 'react'
import { useWithMedia2021 } from 'hooks/useWithMedia'
import {
  ActionInner,
  Container,
  FlexGrow,
  InformationCardDescription,
  InformationCardTitle,
  InnerContainer,
  StyledIcon,
} from './styled'
import {
  TInformationCardProps,
} from './types'

export const InformationCard = ({
  title,
  description,
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
          <InformationCardTitle
            variant="small"
            isBold
            layoutTheme={layoutTheme}
            severity={severity}
            isMobile={isMobile}
          >
            {title}
          </InformationCardTitle>
          <InformationCardDescription
            variant="caption"
            layoutTheme={layoutTheme}
            severity={severity}
            isMobile={isMobile}
          >
            {description}
          </InformationCardDescription>
        </FlexGrow>
        {layoutTheme === 'button_default' && actionComponent}
      </InnerContainer>
      {layoutTheme === 'button_icon' ? actionComponent : <></>}
    </Container>
  )
}
