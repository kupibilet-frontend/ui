module.exports = {
  // `jest` doesn't work without this config, see GitHub issue:
  // https://github.com/facebook/jest/issues/6766
  testURL: 'http://localhost',

  // Configure Jest to work with Webpack's require.context()
  // https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core#configure-jest-to-work-with-webpacks-requirecontext
  setupFiles: ['<rootDir>/.jest/register-context.js'],
}