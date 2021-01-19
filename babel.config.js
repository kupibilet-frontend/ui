const BASE_PLUGINS = [
  ['flow-react-proptypes'],
  ['@babel/plugin-proposal-class-properties'],
  ['@babel/plugin-proposal-export-default-from'],
  ['module-resolver', {
    root: ['./'],
    alias: {
      blocks: './src/blocks',
      components: './src/components',
      utils: './src/utils',
      storybook: './storybook',
    },
  }],
  ['@babel/plugin-transform-runtime', {
    regenerator: true,
  }],
]

const BASE_PRESETS = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow', '@babel/typescript']

module.exports = {
  env: {
    default: {
      plugins: [
        ...BASE_PLUGINS,
        ['styled-components', {
          minify: false,
        }],
      ],
      presets: BASE_PRESETS,
    },

    esmodules: {
      plugins: [
        ...BASE_PLUGINS,
        ['styled-components', {
          ssr: true,
        }],
      ],
      presets: BASE_PRESETS,
    },

    test: {
      plugins: [
        ...BASE_PLUGINS,
        ['styled-components', {
          minify: false,
        }],
        ['require-context-hook'],
      ],
      presets: BASE_PRESETS,
    },
  },
}
