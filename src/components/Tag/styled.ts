import Icon from 'components/Icon'
import styled, { DefaultTheme } from 'styled-components'
import { TVariant } from '.'


const getPadding = (theme: DefaultTheme, variant: TVariant) => {
  const { top, right, bottom, left } = theme.tag[`tag_label_${variant}_medium_size_padding_default`]

  return `
    padding: ${top} ${right} ${bottom} ${left};
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
`

export const StyledIcon = styled(Icon)<ITagProps>`
  align-self: flex-end;
  fill: ${({ theme, variant }) => theme.tag[`tag_label_${variant}_medium_color_text_default`]};
`

export const IconBox = styled.div`
  height: 16px;
  margin-right: 4px;
`
