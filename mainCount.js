#!/usr/bin/env node

const data = require('./data');
const count = require('./count');

const result = count(data);

console.log(JSON.stringify(result, null, 2));