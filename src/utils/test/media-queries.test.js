import { css } from 'styled-components'
import media from '../media-queries'

test('media-queries', () => {
  const MediaSnap = css`
    .class {
      ${media.mobile`
        background: black;

        &:hover {
          background: white;
        }
      `} ${media.tablet`
        background: black;

        &:hover {
          background: white;
        }
      `} ${media.desktop`
        background: black;

        &:hover {
          background: white;
        }
      `};
    }
  `

  expect(MediaSnap).toMatchSnapshot()
})
