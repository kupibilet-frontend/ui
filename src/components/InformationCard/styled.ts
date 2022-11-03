import Icon from 'components/Icon'
import Typography from 'components/Typography'
import styled, { css, DefaultTheme } from 'styled-components'
import { queries2021 } from 'utils/media-queries'
import { TInformationCardProps, TInformationCardTextProps, TInformationCardTitleProps } from './types'

type WithStyledTheme<K> = K & { theme: DefaultTheme }

const containerCss = ({
  theme,
  layoutTheme,
  severity,
}: WithStyledTheme<TInformationCardProps>) => {
  const paddingToken = `information_card_${layoutTheme}_${severity}_medium_size_padding_default` as const
  const bgColorToken = `information_card_${layoutTheme}_${severity}_medium_color_bg_default` as const
  const borderRadiusToken = `information_card_${layoutTheme}_${severity}_medium_size_border_radius_default` as const

  return css`
    padding-top: ${theme.informationCard[`information_card_${layoutTheme}_${severity}_medium_size_padding_default`]?.top};
    padding-left: ${theme.informationCard[paddingToken]?.left};
    padding-bottom: ${theme.informationCard[paddingToken]?.bottom};
    padding-right: ${theme.informationCard[paddingToken]?.right};
    background-color: ${theme.informationCard[bgColorToken]};
    border-radius: ${theme.informationCard[borderRadiusToken]};
  `
}

export const Container = styled.div<TInformationCardProps>`
  display: flex;
  overflow: hidden;
  ${containerCss}
`

const iconCss = ({
  theme,
  layoutTheme,
  severity,
}: WithStyledTheme<Pick<TInformationCardProps, 'layoutTheme' | 'severity'>>) => {
  const marginToken = `information_card_${layoutTheme}_${severity}_medium_size_padding_default` as const
  const colorToken = `information_card_${layoutTheme}_${severity}_medium_color_icon_default` as const

  return css`
    margin-right: ${theme.informationCard[marginToken]?.innerHorizontalIcon};
    fill: ${theme.informationCard[colorToken]};
  `
}

export const StyledIcon = styled(Icon)<WithStyledTheme<Pick<TInformationCardProps, 'layoutTheme' | 'severity'>>>`
  width: 20px;
  height: 20px;
  ${iconCss}
`

const actionCss = ({
  theme,
  layoutTheme,
  severity,
}: WithStyledTheme<Pick<TInformationCardProps, 'layoutTheme' | 'severity'>>) => {
  const marginToken = `information_card_${layoutTheme}_${severity}_medium_size_padding_default` as const

  return css`
    margin-left: ${theme.informationCard[marginToken]?.innerHorizontalIcon};

    @media ${queries2021.isMobile} {
      ${layoutTheme === 'button_default' && 'margin-left: 0;'};
      // types of tokens are inconsistent
      margin-top: ${(theme.informationCard[marginToken] as unknown as Record<string, string>).innerVerticalButton ?? 0};
    }
  `
}

export const ActionInner = styled.div<Pick<TInformationCardProps, 'layoutTheme' | 'severity'>>`
  ${actionCss}
`

export const InnerContainer = styled.div`
  display: flex;
  flex-grow: 1;

  @media ${queries2021.isMobile} {
    flex-direction: column;
  }
`

export const FlexGrow = styled.div`
  flex-grow: 1;
`

const titleCss = ({
  theme,
  layoutTheme,
  severity,
  isMobile,
}: WithStyledTheme<Required<TInformationCardTitleProps>>) => {
  const colorToken = `information_card_${layoutTheme}_${severity}_medium_color_headline_default` as const

  const media = isMobile ? 'mobile' : 'desktop'
  const typographyToken = `information_card_${layoutTheme}_${severity}_medium_typography_${media}_headline` as const

  return css`
    display: flex;
    color: ${theme.informationCard[colorToken]};
    font-size: ${theme.informationCard[typographyToken].size}px;
    line-height: ${theme.informationCard[typographyToken].lineHeight}px;
    font-weight: ${theme.informationCard[typographyToken].fontWeight};
  `
}

export const InformationCardTitleInner = styled(Typography)<Required<TInformationCardTitleProps>>`
  ${titleCss}
`

const textCss = ({
  theme,
  layoutTheme,
  severity,
  isMobile,
}: WithStyledTheme<Required<TInformationCardTitleProps>>) => {
  const colorToken = `information_card_${layoutTheme}_${severity}_medium_color_description_default` as const

  const media = isMobile ? 'mobile' : 'desktop'
  const typographyToken = `information_card_${layoutTheme}_${severity}_medium_typography_${media}_description` as const
  const marginToken = `information_card_${layoutTheme}_${severity}_medium_size_padding_default` as const

  return css`
    display: flex;
    color: ${theme.informationCard[colorToken]};
    font-size: ${theme.informationCard[typographyToken].size}px;
    line-height: ${theme.informationCard[typographyToken].lineHeight}px;
    font-weight: ${theme.informationCard[typographyToken].fontWeight};
    margin-top: ${theme.informationCard[marginToken]?.innerVerticalDescription};
  `
}

export const InformationCardTextInner = styled(Typography)<Required<TInformationCardTextProps>>`
  ${textCss}
`
