const { readFileSync } = require('fs');

const posthtml = require('posthtml');
const include = require('posthtml-include');

const html = readFileSync('index.html');
