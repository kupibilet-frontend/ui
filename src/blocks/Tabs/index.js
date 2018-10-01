/*
 * TODO Take attention!
 * babel-plugin-module-resolver@2.7 has issue with processing `export … from` ExportDeclaration
 * Upgate v2.6.2 to v3 when it out of beta
 * https://github.com/tleunen/babel-plugin-module-resolver/issues/174#issuecomment-301449149
 */

/*
 * rc-tabs v9.3.1 - v9.3.3 has bug
 * that blurs anyting on page
 * See https://github.com/react-component/tabs/issues/133
 * and DO NOT UPGRADE rc-tabs
 */

export { Tabs, TabPane, TabBar } from 'components/Tabs'
export { default as Tab } from 'blocks/Tabs/Tab'
