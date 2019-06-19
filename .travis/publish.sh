#!/bin/bash

echo "Publishing release $TRAVIS_TAG"

if [[ -z "$NPM_TOKEN" ]] ; then
  echo "NPM_TOKEN must be defined"
  exit 1
fi

echo //registry.npmjs.org/:_authToken=$NPM_TOKEN > ~/.npmrc
npm run lerna:publish
