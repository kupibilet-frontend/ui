#!/bin/bash

yarn versionize

VERSION=$(node -e "process.stdout.write(require('./package.json').version)")
COMMENT="New version of package: \`$VERSION\`"


if [ "$TRAVIS_PULL_REQUEST" ]; then
  curl -H "Authorization: token $GITHUB_TOKEN" -X POST -d "{\"body\": \"$COMMENT\"}" "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
fi
