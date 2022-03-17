#!/bin/bash

git config user.email "tech@kupibilet.ru"
git config user.name "kupibilet-dev"

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
