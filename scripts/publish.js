const { join } = require('path');
const { promisify } = require('util');
const childProcess = require('child_process');
const { red, green, blue, bold } = require('chalk');

const exec = promisify(childProcess.exec);

const cwd = process.cwd();
const { name, version } = require(join(cwd, 'package.json'));

const resultCode = {
  ERROR: -1,
  SAME_VERSION: 0,
  NEW_VERSION: 1,
  NEW_PACKAGE: 2
};

/**
 * Searches if the package is already published with the same version.
 * @param {string} name - Package name.
 * @param {string} version - Package version.
 * @returns {Promise<number>} Status code of the package (existing/new).
 */
function find(name, version) {
  const args = [];

  if (process.env.REGISTRY) {
    args.push(`--registry ${ process.env.REGISTRY }`);
  }

  return exec(`npm view ${ name }@${ version } version ${ args.join(' ') }`, { cwd })
  .then(({ stdout }) => stdout.trim() === version
    ? resultCode.SAME_VERSION
    : resultCode.NEW_VERSION)
  .catch((error) => {
    if (!~error.message.indexOf('E404')) {
      throw error;
    }

    return resultCode.NEW_PACKAGE;
  });
}

/**
 * Publishes the package in NPM registry.
 * @param {number} code - Status code of the package (existing/new).
 * @returns {Promise<number>} Status code of the package (existing/new).
 */
function publish(code) {
  const args = [];

  if (process.env.DRY_RUN) {
    args.push('--dry-run');
  }

  if (process.env.REGISTRY) {
    args.push(`--registry ${ process.env.REGISTRY }`);
  }

  return exec(`npm publish ${ args.join(' ') }`, { cwd })
  .then(() => code);
}

find(name, version)
.then((code) => {
  if (!process.env.FORCE && code === resultCode.SAME_VERSION) {
    console.log(`Package ${ bold(name) } up-to-date`);

    process.exit(resultCode.SAME_VERSION);
  }

  return publish(code);
})
.then((code) => {
  if (code === resultCode.NEW_VERSION) {
    console.log(`Package ${ bold(blue(name)) } updated to v${ bold(blue(version)) }`);
  } else {
    console.log(`Package ${ bold(green(name)) } created with v${ bold(green(version)) }`);
  }
})
.catch((error) => {
  console.error(`Error updating ${ bold(red(name)) } to v${ bold(red(version)) }`);
  console.error(error);

  process.exit(resultCode.ERROR);
});
