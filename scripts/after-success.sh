#!/bin/bash

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  # When versionize fails exit shell with versionize exit-code
  yarn build
  yarn versionize || exit $?

  VERSION=$(node -e "process.stdout.write(require('./package.json').version)")
  COMMENT="New version of package: \`$VERSION\`"

  echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
  # Exit with npm exit-code when it fails
  npm publish --tag dev || exit $?
  curl \
    -sS \
    -H "Authorization: token $GITHUB_TOKEN" \
    -X POST \
    -d "{\"body\": \"$COMMENT\"}" "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
fi
