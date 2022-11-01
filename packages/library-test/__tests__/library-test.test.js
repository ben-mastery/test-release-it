'use strict';

const libraryTest = require('..');
const assert = require('assert').strict;

assert.strictEqual(libraryTest(), 'Hello from libraryTest');
console.info("libraryTest tests passed");
