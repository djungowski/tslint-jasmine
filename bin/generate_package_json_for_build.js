/**
 * Creates a package.json file for the npm module
 * Inspired by https://github.com/microsoft/tslint-microsoft-contrib/blob/bfc28e95dde1fab92aa457e79d3
 */
const fs = require('fs');
const basePackageJson = require('../package.json');

delete basePackageJson.devDependencies;
delete basePackageJson.scripts;

fs.writeFileSync('dist/package.json', JSON.stringify(basePackageJson, undefined, 4));