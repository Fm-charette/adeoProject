#!/usr/bin/env node

const data = require('./data');
const filter = require('./filter');

const pattern = process.argv[2];

if (!pattern) {
  console.error('Please provide a search pattern.');
  process.exit(1);
}

const result = filter(data, pattern);

console.log(JSON.stringify(result, null, 2));