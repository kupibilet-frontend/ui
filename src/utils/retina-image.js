import { hiDPI } from 'polished'

export default (filename, filenameRetina) => ({
  backgroundImage: `url(${filename})`,
  [hiDPI(1.5)]: {
    backgroundImage: `url(${filenameRetina})`,
  },
})
