import _get from 'lodash/get'

const getWidth = () => Math.max(
  _get(global, 'document.documentElement.clientWidth', 0),
  global.innerWidth || 0,
)
const getHeight = () => Math.max(
  _get(global, 'document.documentElement.clientHeight', 0),
  global.innerHeight || 0,
)

export default {
  getWidth,
  getHeight,
}
