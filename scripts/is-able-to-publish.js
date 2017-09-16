#!/usr/bin/env node

const { exec } = require('child_process')
const path = require('path')
const semver = require('semver')
const { red } = require('chalk')

const version = process.env.TRAVIS_BRANCH || 'no ref'

try {
  semver(version)
} catch (e) {
  console.warn(red(
    `Git HEAD (${version}) not a tag commit!\nPublish aborted.`
  ))
  process.exit(1)
}

// Allow to publish pre-versions from any branch
if (semver.prerelease(version)) {
  process.exit(0)
}

exec(
  // TODO travis getting project by `git clone --depth=2 --branch=TAG`
  // and completly destroys branches and commits history.
  // Propably should fetch github release
  'git branch -l master --contains "$TRAVIS_BRANCH"',
  { cwd: path.resolve(__dirname, '../') },
  (err, stdout, stderr) => {
    if (err || stderr) {
      // Not a "malformed object name" git error
      if (err && err.code != 129) {
        console.error(err)
      }
      process.exit(1)
    }

    const headNotInMaster = !stdout
    if (headNotInMaster) {
      console.warn(red(
        `The "${version}" tag not in master and not a pre-version.\nPublish aborted.`
      ))
    }
    process.exit(Number(headNotInMaster))
  }
)
