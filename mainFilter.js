#!/usr/bin/env node

const data = require('./data');
const filter = require('./filter');

const pattern = process.argv[2];

if (!pattern) {
  console.error('Please provide a search pattern.');
  process.exit(1);
}

try {
  const result = filter(data, pattern);
  console.log(JSON.stringify(result, null, 2));
} catch (err) {
  console.error('An error has occured:', err.message);
}