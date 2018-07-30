const { join } = require('path');
const { promisify } = require('util');
const childProcess = require('child_process');

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
  return exec(`npm view ${ name }@${ version } version`, { cwd })
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
  return exec(`${ process.env.DRY_RUN ? 'echo' : 'npm' } publish`, { cwd })
  .then(() => code);
}

find(name, version)
.then((code) => {
  if (code === resultCode.SAME_VERSION) {
    console.log(`Package ${ name } up-to-date`);

    process.exit(resultCode.SAME_VERSION);
  }

  return publish(code);
})
.then((code) => {
  if (code === resultCode.NEW_VERSION) {
    console.log(`Package ${ name } updated to v${ version }`);
  } else {
    console.log(`Package ${ name } created with v${ version }`);
  }
})
.catch((error) => {
  console.error(`Error updating ${ name } to v${ version }`);
  console.error(error);

  process.exit(resultCode.ERROR);
});
