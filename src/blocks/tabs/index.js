/*
 * TODO Take attention!
 * babel-plugin-module-resolver@2.7 has issue with processing `export … from` ExportDeclaration
 * Upgate v2.6.2 to v3 when it out of beta
 * https://github.com/tleunen/babel-plugin-module-resolver/issues/174#issuecomment-301449149
 */

export { Tabs, TabPane, TabBar } from 'components/tabs'
export { default as Tab } from 'blocks/tabs/Tab.js'
