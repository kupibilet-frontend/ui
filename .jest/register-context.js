/*
 * Configure Jest to work with Webpack's require.context()
 *
 * https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core#configure-jest-to-work-with-webpacks-requirecontext
 * */
import registerRequireContextHook from 'babel-plugin-require-context-hook/register'

registerRequireContextHook()
