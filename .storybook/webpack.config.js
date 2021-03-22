const path = require('path')

module.exports = function({ config }) {
  config.resolve.extensions.push('.ts')
  config.resolve.extensions.push('.tsx')

  config.module.rules.push({
    test: /\.js$/,
    include: [path.resolve(__dirname, '../src')],
    loader: require.resolve('@storybook/source-loader'),
    enforce: 'pre',
  })

  config.module.rules.push({
    include: [path.resolve(__dirname, '../src')],
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
      ]
    }
  })

  config.resolve.alias = {
    components: path.resolve(__dirname, '../src/components'),
    utils: path.resolve(__dirname, '../src/utils'),
  }

  return config
}
