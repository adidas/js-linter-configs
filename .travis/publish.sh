#!/bin/bash

BRANCH=${TRAVIS_PULL_REQUEST_BRANCH:-$TRAVIS_BRANCH}
BRANCH_REGEX="^(develop$|release//*)"

echo Current branch is $BRANCH

if [[ $BRANCH =~ $BRANCH_REGEX ]] ; then

  if [[ -z "$NPM_TOKEN" || -z "$GITHUB_TOKEN" ]] ; then
    echo "NPM_TOKEN and GITHUB_TOKEN must be defined"
    exit 1
  fi

  git config --global user.email "deploy@travis-ci.com"
  git config --global user.name "Deployment Bot"

  git checkout $BRANCH

  PKG_VERSION=`node -p "require('./package.json').version"`
  echo //registry.npmjs.org/:_authToken=$NPM_TOKEN > ~/.npmrc
  npm run lerna:publish -- --repo-version ${PKG_VERSION} --skip-git --yes
  npm run lerna:exec -- "rm -rf node_modules"
  git add -A
  git commit -m "PUBLISH v${PKG_VERSION}"
  git tag -f -a $PKG_VERSION -m $PKG_VERSION
  git remote add origin-publish https://${GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git
  git push -f origin-publish develop:master
  git push -f origin-publish --tags
else
  echo Skipping publication
fi
