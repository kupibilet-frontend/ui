#!/bin/bash

git config user.email "system@kupibilet.ru"
git config user.name "Kupibilet-System"

yarn versionize || exit $?

VERSION=$(node -e "process.stdout.write(require('./package.json').version)")
COMMENT="New version of package: \`$VERSION\`"

echo "${COMMENT}"

echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
# Exit with npm exit-code when it fails
npm publish --tag dev || exit $?
curl \
  -sS \
  -H "Authorization: token $GITHUB_TOKEN" \
  -X POST \
