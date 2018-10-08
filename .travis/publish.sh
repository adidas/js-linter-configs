#!/bin/bash

BRANCH=${TRAVIS_PULL_REQUEST_BRANCH:-$TRAVIS_BRANCH}
BRANCH_REGEX="^(release//*)"

echo Current branch is $BRANCH

if [[ $BRANCH =~ $BRANCH_REGEX ]] ; then

  if [[ -z "$NPM_TOKEN" ]] ; then
    echo "NPM_TOKEN must be defined"
    exit 1
  fi

  echo //registry.npmjs.org/:_authToken=$NPM_TOKEN > ~/.npmrc
  npm run lerna:publish
else
  echo Skipping publication
fi
