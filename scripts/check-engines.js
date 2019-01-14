#!/usr/bin/env node

const { exec } = require('child_process')
const { satisfies, clean } = require('semver')
const { red } = require('chalk')
const { engines } = require('../package.json')

Object.entries(engines).forEach(([engine, requiredVersion]) => {
  exec(`${engine} --version`, (err, stdout) => {
    if (err) throw err

    // drop pre-version part because it is invalid for `satisfies`
    const version = clean(stdout).replace(/-.+$/, '')
    if (!satisfies(version, requiredVersion)) {
      console.error(red(
        `\n\tERROR: You need ${engine}@${requiredVersion} or greater\n`
      ))
      process.exit(1)
    }
  })
})
