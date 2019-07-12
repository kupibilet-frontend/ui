// @flow

export const isThin = (string) => string === 'thin'

export const isCompact = (string) => string === 'compact'

export const isSetSize = (string) => isThin(string) || isCompact(string)
