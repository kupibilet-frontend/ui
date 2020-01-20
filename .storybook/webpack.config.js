const path = require('path')

module.exports = function({ config }) {
  config.module.rules.push({
    test: /stories\.js$/,
    include: [path.resolve(__dirname, '../src')],
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  })

  return config
}
