import { hiDPI } from 'polished'

interface TRetinaImage {
  [key: string]: string | { backgroundImage: string },
}

export default (
  filename: string,
  filenameRetina: string,
): TRetinaImage => (
  {
    backgroundImage: `url(${filename})`,
    [hiDPI(1.5)]: {
      backgroundImage: `url(${filenameRetina})`,
    },
  }
)
