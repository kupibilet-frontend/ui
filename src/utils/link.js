import { css } from 'styled-components'

const Link = css`
    color: ${(props) => props.theme.color.primaryDarkest};
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
`

export default Link
