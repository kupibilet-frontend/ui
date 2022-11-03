import { TUseWithMedia2021 } from 'hooks/useWithMedia'
import React from 'react'

export type TInformationCardProps = {
  severity: 'danger' | 'info' | 'warning',
  icon?: string,
  action?: React.ReactChild,
  layoutTheme: 'default' | 'button_default' | 'button_icon',
  children: React.ReactElement | React.ReactElement[],
  className: string,
}

type TInformationCardChild = Partial<
    Pick<TInformationCardProps, 'layoutTheme' | 'severity'>
      & Pick<TUseWithMedia2021, 'isMobile'
    >
  >
  & { children: React.ReactChild | React.ReactChild[] }

export type TInformationCardTitleProps = TInformationCardChild

export type TInformationCardTextProps = TInformationCardChild
