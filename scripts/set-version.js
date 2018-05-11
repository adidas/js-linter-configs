const { resolve } = require('path');
const replace = require('replace');
const { version } = require('../package.json');

console.info(`Updating lerna.json to v${ version }!`);

replace({
  regex: '0\.0\.0',
  replacement: version,
  paths: [ resolve(__dirname, '../lerna.json') ],
  silent: true
});
