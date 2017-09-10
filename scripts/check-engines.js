#!/usr/bin/env node

const { exec } = require('child_process')
const { satisfies, clean } = require('semver')
const { red } = require('chalk')
const { engines } = require('../package.json')

Object.entries(engines).forEach(([engine, requiredVersion]) => {
  exec(`${engine} --version`, (err, stdout) => {
    if (err) throw err

    const version = clean(stdout)
    if (!satisfies(version, requiredVersion)) {
      console.error(red(
        `\n\tERROR: You need ${engine}@${requiredVersion} or greater\n`
      ))
      process.exit(1)
    }
  })
})
