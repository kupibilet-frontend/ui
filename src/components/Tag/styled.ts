import Icon from 'components/Icon'
import styled, { css, DefaultTheme } from 'styled-components'
import { TVariant } from '.'


const getPadding = (theme: DefaultTheme, variant: TVariant) => {
  const { top, right, bottom, left } = theme.tag[`tag_label_${variant}_medium_size_padding_default`]

  return `
       padding: ${top} ${right} ${bottom} ${left};
    `
}

const getFont = (theme: DefaultTheme, variant: TVariant) => {
  const { size, lineHeight, fontWeight } = theme.tag[`tag_label_${variant}_medium_typography_desktop_default`]

  return `
    font-weight: ${fontWeight};
    font-size: ${size}px;
    line-height: ${lineHeight}px;
 `
}

interface ITagProps {
    readonly variant: TVariant;
  }


export const Wrapper = styled.div<ITagProps>`
    min-width: 94px;
    height: 24px;
    border-radius: ${({ theme, variant }) => theme.tag[`tag_label_${variant}_medium_size_border_radius_default`]};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme, variant }) => theme.tag[`tag_label_${variant}_medium_color_bg_default`]};
    color: ${({ theme, variant }) => theme.tag[`tag_label_${variant}_medium_color_text_default`]};
    ${({ theme, variant }) => getPadding(theme, variant)}
    ${({ theme, variant }) => getFont(theme, variant)}
`

export const StyledIcon = styled(Icon)<ITagProps>`
   align-self: flex-end;
   fill: ${({ theme, variant }) => theme.tag[`tag_label_${variant}_medium_color_text_default`]};
`

interface IMessageBoxProps extends ITagProps {
    readonly withLeftIcon: boolean;
}

export const IconBox = styled.div`
    margin-top: auto;
    height: 15px;
`

export const MessageBox = styled.div<IMessageBoxProps>`
   ${({ theme, variant }) => getFont(theme, variant)}
   ${({ withLeftIcon }) => withLeftIcon && css`
        margin-left: 4px;
    `}
`
